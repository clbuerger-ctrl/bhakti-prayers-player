/* [Grok.com] Auto-Scroll: Datei, YouTube oder Uhr */
var ytTime=null, ytDur=null, playOrigin=Date.now();
function tempoMap(){
  try{ return JSON.parse(localStorage.getItem("bpp-tempo")||"{}"); }catch(e){ return {}; }
}
function rememberTempo(){
  if(i<0 || !PRAYERS[i]) return;
  var m=tempoMap();
  m[PRAYERS[i].id]={ tempo:scrollTempo, auto:!!autoScroll, at:Date.now() };
  try{ localStorage.setItem("bpp-tempo", JSON.stringify(m)); }catch(e){}
}
function restoreTempo(id){
  var t=tempoMap()[id];
  if(!t) return false;
  if(typeof t.tempo==="number" && t.tempo>=0.5 && t.tempo<=1.8) scrollTempo=t.tempo;
  autoScroll=!!t.auto;
  return true;
}
function markPlayOrigin(){
  var already=0;
  try{ if(!ytOn && a.src && isFinite(a.currentTime)) already=a.currentTime; }catch(e){}
  if(ytOn && typeof ytTime==="number") already=ytTime;
  playOrigin=Date.now()-already*1000;
}
function toggleAuto(){
  autoScroll=!autoScroll;
  if(autoScroll) markPlayOrigin();
  rememberTempo();
  persistNow(); applyUI();
}
function shiftScroll(d){
  scrollTempo=Math.round((scrollTempo+d)*100)/100;
  if(scrollTempo<0.5) scrollTempo=0.5;
  if(scrollTempo>1.8) scrollTempo=1.8;
  rememberTempo();
  persistNow(); applyUI();
}
function askYtTime(){
  if(!ytOn) return;
  try{
    yt.contentWindow.postMessage(JSON.stringify({event:"listening",id:1}),"*");
    yt.contentWindow.postMessage(JSON.stringify({event:"command",func:"getCurrentTime",args:[]}),"*");
    yt.contentWindow.postMessage(JSON.stringify({event:"command",func:"getDuration",args:[]}),"*");
  }catch(e){}
}
function songProgress(){
  if(i<0) return null;
  var P=PRAYERS[i];
  var gs=stanzaGroups(P);
  var n=Math.max(gs.length,1);
  var est=(typeof P.dauer==="number" && P.dauer>10)?P.dauer:n*14;
  var t=0, dur=est;
  if(!ytOn && a && a.src){
    if(isFinite(a.duration) && a.duration>=8){ dur=a.duration; t=a.currentTime||0; }
    else { t=(Date.now()-playOrigin)/1000; dur=est; }
  } else {
    if(typeof ytTime==="number") t=ytTime;
    else t=(Date.now()-playOrigin)/1000;
    if(typeof ytDur==="number" && ytDur>=8) dur=ytDur;
    else dur=est;
  }
  if(t<0) t=0;
  if(dur<8) dur=est;
  return { t:t, dur:dur, gs:gs, n:n };
}
function autoLineFromTime(){
  if(!autoScroll || i<0) return;
  if(!isPlaying()) return;
  var p=songProgress();
  if(!p) return;
  var pos=(p.t/p.dur)*scrollTempo;
  if(pos>0.999) pos=0.999;
  if(pos<0) pos=0;
  var n=Math.floor(pos*p.n);
  if(n>p.n-1) n=p.n-1;
  if(n<0) n=0;
  var start=p.gs[n]?p.gs[n].start:0;
  if(start!==line){ line=start; paintLyrics(); }
}
window.addEventListener("message", function(e){
  var d=e.data;
  if(typeof d==="string"){
    try{ d=JSON.parse(d); }catch(err){ return; }
  }
  if(!d) return;
  if(d.event==="infoDelivery" && d.info){
    if(typeof d.info.currentTime==="number") ytTime=d.info.currentTime;
    if(typeof d.info.duration==="number") ytDur=d.info.duration;
  }
  if(typeof d.info==="number" && d.event==="command"){
    /* ignore */
  }
});
setInterval(function(){
  if(!autoScroll) return;
  askYtTime();
  autoLineFromTime();
}, 400);

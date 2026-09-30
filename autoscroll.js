/* [Grok.com] Auto-Scroll und Tempo je Song merken */
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
function toggleAuto(){
  autoScroll=!autoScroll;
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
function autoLineFromTime(){
  if(!autoScroll || i<0 || ytOn) return;
  if(a.paused || a.ended) return;
  if(!a.duration || !isFinite(a.duration) || a.duration<8) return;
  var gs=stanzaGroups(PRAYERS[i]);
  if(gs.length<2) return;
  var pos=(a.currentTime||0)/a.duration*scrollTempo;
  if(pos>0.999) pos=0.999;
  if(pos<0) pos=0;
  var n=Math.floor(pos*gs.length);
  if(n>gs.length-1) n=gs.length-1;
  var start=gs[n].start;
  if(start!==line){ line=start; paintLyrics(); }
}

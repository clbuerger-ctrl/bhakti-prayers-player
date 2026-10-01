/* [Grok-Bot] V1.38: Vers-Startzeiten statt festem Takt.
   - N (oder Klick auf eine Strophe) waehrend der Wiedergabe setzt die Zeit neu: die gewaehlte Strophe beginnt JETZT.
     Das wird pro Gesang und Tonquelle (MP3 / YouTube) gemerkt.
   - Strophen ohne gemerkte Zeit werden nach ihrer Laenge (Silbenzahl) geschaetzt, nicht gleich lang.
   - P.marksFile / P.marksYt: aus der Aufnahme ermittelte Startzeiten (Sekunden je Strophe), falls vorhanden. */
function bppSrcKey(){ return ytOn?"yt":"file"; }
function bppMarkStore(){ try{ return JSON.parse(localStorage.getItem("bpp-marks")||"{}"); }catch(e){ return {}; } }
function bppUserMarks(id){ var s=bppMarkStore(); return s[id+"|"+bppSrcKey()]||{}; }
function bppSaveUserMarks(id, m){ var s=bppMarkStore(); s[id+"|"+bppSrcKey()]=m; try{ localStorage.setItem("bpp-marks", JSON.stringify(s)); }catch(e){} }
function bppWeights(P, gs){
  return gs.map(function(g){
    var t=g.idx.map(function(n){ return String(P.zeilen[n].sa||""); }).join(" ");
    var v=(t.match(/(ai|au|[aāiīuūṛṝḷeoAĀIĪUŪEO])/g)||[]).length;
    return Math.max(v, 6);
  });
}
function bppAnchors(P, gs){
  var A={};
  var base=ytOn?P.marksYt:P.marksFile;
  if(base && base.length){ base.forEach(function(t,g){ if(typeof t==="number" && g<gs.length) A[g]=t; }); }
  var u=bppUserMarks(P.id);
  Object.keys(u).forEach(function(k){ var g=+k; if(g<gs.length) A[g]=u[k]; });
  if(A[0]==null) A[0]=(ytOn?P.youtubeStart:0)||0;
  return A;
}
function bppStarts(p){
  var P=PRAYERS[i], gs=p.gs, w=bppWeights(P, gs), A=bppAnchors(P, gs);
  var cum=[0]; for(var g=0;g<gs.length;g++) cum.push(cum[g]+w[g]);
  var keys=Object.keys(A).map(Number).sort(function(a,b){ return a-b; }).filter(function(k,j,arr){ return j===0 || A[k]>A[arr[j-1]]; });
  /* Sekunden je Silbe: aus gemerkten Abstaenden, sonst Gesamtdauer / Gesamtlaenge */
  var rates=[];
  for(var j=1;j<keys.length;j++){ var dw=cum[keys[j]]-cum[keys[j-1]]; if(dw>0) rates.push((A[keys[j]]-A[keys[j-1]])/dw); }
  var r;
  if(rates.length){ rates.sort(function(a,b){ return a-b; }); r=rates[Math.floor(rates.length/2)]; }
  else r=Math.max(p.dur-A[0], 10)/cum[gs.length];
  r=r/(scrollTempo||1);
  var st=[];
  for(var g2=0;g2<gs.length;g2++){
    if(A[g2]!=null && keys.indexOf(g2)>=0){ st.push(A[g2]); continue; }
    var lo=null, hi=null;
    keys.forEach(function(k){ if(k<g2) lo=k; if(k>g2 && hi==null) hi=k; });
    if(lo==null) lo=keys[0];
    if(hi!=null && cum[hi]>cum[lo]) st.push(A[lo]+(A[hi]-A[lo])*(cum[g2]-cum[lo])/(cum[hi]-cum[lo]));
    else st.push(A[lo]+(cum[g2]-cum[lo])*r);
  }
  return st;
}
function stanzaFromProgress(p){
  var st=bppStarts(p), k=0;
  for(var g=0;g<st.length;g++){ if(st[g]<=p.t+0.05) k=g; }
  return k;
}
function syncAutoFromLine(){
  holdLineUntil=Date.now()+1200;
  manualShift=0;
  if(i<0) return;
  var p=songProgress();
  if(!p || !isPlaying() || p.t<1) { applyUI(); return; }
  var g=currentGroupIndex(); if(g<0) return;
  var P=PRAYERS[i], u=bppUserMarks(P.id), t=Math.round(p.t*10)/10;
  Object.keys(u).forEach(function(k){ var kk=+k; if((kk>g && u[k]<=t) || (kk<g && u[k]>=t)) delete u[k]; });
  u[g]=t;
  bppSaveUserMarks(P.id, u);
  applyUI();
}
function tempoLabel(){ return "×"+scrollTempo.toFixed(2); }
function shiftScroll(d){
  scrollTempo=Math.round((scrollTempo+d)*100)/100;
  if(scrollTempo<0.5) scrollTempo=0.5;
  if(scrollTempo>2.2) scrollTempo=2.2;
  scrollTempo2=0; splitTime=-1; splitIdx=-1;
  rememberTempo(); persistNow(); applyUI();
}
/* [Grok-Bot] V1.39: Mukunda Mala – Strophenanfaenge aus der MP3 per Spracherkennung ermittelt (null = geschaetzt) */
(function(){
  var m=(typeof PRAYERS!=="undefined")&&PRAYERS.find(function(p){ return p.id==="mukunda"; });
  if(m && !m.marksFile) m.marksFile=[20,39,64.5,89.5,107.5,137,169,188.5,210.5,null,null,269.5,305,null,350.5,377.5,409,null,null,496,525,554.5,585,614,644.5,null,null,null,746,775,795,816.8,null,858,889,911.5,936,954.5,974,995,1020];
})();
/* [Grok-Bot] V1.40: YouTube-Strophenanfaenge (marksYt) per Spracherkennung der Videotonspur; Intro wie "Om" / "Sri Gurubhyo" vor Strophe 1 wird uebersprungen */
(function(){
  var Y={"mukunda":[19.1,38.1,63.6,88.7,106.7,136.2,168.2,187.7,209.7,null,null,268.6,304.1,null,349.6,376.6,408.1,null,null,495.1,524.1,553.6,584.1,613.1,643.6,null,null,null,745.1,774.1,794.1,815.9,null,857.1,888.1,910.6,935.1,953.6,973.1,994.1,1019.1],"govinda":[null,34,null,null,115,145,null,null,null,251,276,null,null,null,null,404.5,430,455,480,505.5,530,554.8,579.7,605,null,null,679,704.5,733],"suprabhatam":[10,null,null,null,90,null,null,150,null,null,null,null,null,266.5,null,306.5],"kavacham":[7,27.3,44.8,64.8,85,106,125,145,164.8,187.7,205.3,225.8,245,265.3,null,304.5,323.5,341.5,null,null,null,405,null,null,454,null,null,null,null,null,null,null,null,null,590,606.8,null,896]};
  if(typeof PRAYERS==="undefined") return;
  PRAYERS.forEach(function(p){ if(Y[p.id] && !p.marksYt) p.marksYt=Y[p.id]; });
})();
/* [Grok-Bot] V1.41: Govinda spielt standardmaessig das YouTube-Video (bessere Aufnahme), die MP3 bleibt als Ersatz */
(function(){
  var g=(typeof PRAYERS!=="undefined")&&PRAYERS.find(function(p){ return p.id==="govinda"; });
  if(g && g.youtube) g.preferFile=false;
})();

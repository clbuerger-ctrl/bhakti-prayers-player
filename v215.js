/* [Grok.com] V2.15: Om aus audio/guru-stotram-abend.mp3 geschnitten (10,7 s).
   Lyrics wieder ohne Om. Autoscroll springt nicht mehr zwischen Om und Strophe 1. */
window.BPP_BUILD="2.15";
(function(){
  if(window.bppV215) return; window.bppV215=1;
  var MARKS=[0.3, 17.4, 35.8, 51.8, 67.8, 85.8, 103.9, 119.5, 136.9, 156.8, 171.7, 188.9, 207.0, 225.7];
  function evening(){
    if(typeof PRAYERS==="undefined") return null;
    return PRAYERS.find(function(p){ return p.id==="guru-stotram-abend"; })||null;
  }
  function strip(){
    var P=evening(); if(!P || !P.zeilen) return;
    if(P.zeilen[0] && P.zeilen[0].nr==="Om") P.zeilen=P.zeilen.filter(function(z){ return z.nr!=="Om"; });
    P.marksFile=MARKS.slice();
    P._bppEstMarks=0;
    P._bppEstSrc="file";
    P.titel="Guru Stotram (Abend)";
  }
  function on(){
    return typeof i!=="undefined" && i>=0 && PRAYERS[i] && PRAYERS[i].id==="guru-stotram-abend" && !(typeof ytOn!=="undefined" && ytOn);
  }
  function tNow(){
    try{ if(typeof a!=="undefined" && a && isFinite(a.currentTime)) return a.currentTime||0; }catch(e){}
    return 0;
  }
  function idx(t){
    var k=0;
    for(var n=0;n<MARKS.length;n++){ if(MARKS[n]<=t+0.15) k=n; }
    return k;
  }
  function apply(){
    strip();
    if(!on() || typeof stanzaGroups!=="function") return;
    var gs=stanzaGroups(PRAYERS[i]); if(!gs || !gs.length) return;
    var k=idx(tNow()); if(k>gs.length-1) k=gs.length-1;
    var start=gs[k].start;
    if(typeof line!=="undefined" && line!==start){ line=start; try{ paintLyrics(); }catch(e){} }
  }
  if(typeof window.stanzaFromProgress==="function" && !window.stanzaFromProgress._bpp215){
    var base=window.stanzaFromProgress;
    var fn=function(p){ if(on()) return idx(tNow()); return base.apply(this, arguments); };
    fn._bpp215=1; window.stanzaFromProgress=fn;
  }
  strip(); apply();
  setInterval(apply, 400);
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", function(){ strip(); apply(); });
  window.addEventListener("load", function(){ strip(); apply(); });
  function showV(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V2.15"; document.title="Bhakti Prayers Player V2.15"; }
  setTimeout(showV, 2000); setTimeout(showV, 4000);
})();

/* [Grok.com] V2.12: Guru Stotram Abend.
   Die Offline-MP3 bleibt. Neu ist nur die Seite: Om (bis 10,8 s) ist keine Strophe.
   Vorspulen (+10 / +30) bleibt bei diesem Gebet und setzt die Strophe nach der Uhr, ohne das Om. */
window.BPP_BUILD="2.12";
window.BPP_SW="sw.js?v=212";
(function(){
  if(window.bppV212) return; window.bppV212=1;
  var OM=11.0;
  var MARKS=[11.0, 28.1, 46.5, 62.5, 78.5, 96.5, 114.6, 130.2, 147.6, 167.5, 182.4, 199.6, 217.7, 236.4];
  function P(){
    if(typeof PRAYERS==="undefined") return null;
    return PRAYERS.find(function(p){ return p.id==="guru-stotram-abend"; })||null;
  }
  function onAbend(){
    return typeof i!=="undefined" && i>=0 && PRAYERS[i] && PRAYERS[i].id==="guru-stotram-abend" && !(typeof ytOn!=="undefined" && ytOn);
  }
  function tNow(){
    try{ if(typeof a!=="undefined" && a && isFinite(a.currentTime)) return a.currentTime||0; }catch(e){}
    return 0;
  }
  function idxAt(t){
    if(t<OM-0.05) return -1;
    var k=0;
    for(var n=0;n<MARKS.length;n++){ if(MARKS[n]<=t+0.05) k=n; }
    return k;
  }
  function applyMarks(){
    var p=P(); if(!p) return;
    p.marksFile=MARKS.slice();
    p._bppEstMarks=0;
    p._bppEstSrc="file";
    p.titel="Guru Stotram (Abend)";
  }
  function show(k){
    if(typeof stanzaGroups!=="function" || typeof i==="undefined" || i<0) return;
    var gs=stanzaGroups(PRAYERS[i]); if(!gs || !gs.length) return;
    var box=document.getElementById("lyrics");
    if(k<0){
      if(box){ var ons=box.querySelectorAll(".stanza.on"); for(var n=0;n<ons.length;n++) ons[n].classList.remove("on"); }
      return;
    }
    if(k>gs.length-1) k=gs.length-1;
    var start=gs[k].start;
    if(typeof line!=="undefined" && start!==line){ line=start; try{ persistNow(); }catch(e){} try{ paintLyrics(); }catch(e){} }
    else if(box){
      var ons2=box.querySelectorAll(".stanza.on");
      for(var m=0;m<ons2.length;m++) ons2[m].classList.remove("on");
      var el=box.querySelector(".stanza[data-start='"+start+"']");
      if(el) el.classList.add("on");
    }
  }
  function hook(){
    applyMarks();
    if(typeof window.bppSkip==="function" && !window.bppSkip._bpp212){
      var base=window.bppSkip;
      var fn=function(d){
        if(!onAbend()) return base.apply(this, arguments);
        var dur=1e9;
        try{ if(a && isFinite(a.duration)) dur=a.duration; }catch(e){}
        var t=Math.max(0, Math.min(dur-0.4, tNow()+d));
        try{ if(a && a.src) a.currentTime=t; }catch(e){}
        try{ manualShift=0; holdLineUntil=Date.now()+1800; }catch(e){}
        show(idxAt(t));
      };
      fn._bpp212=1;
      window.bppSkip=fn;
    }
    if(typeof window.stanzaFromProgress==="function" && !window.stanzaFromProgress._bpp212){
      var sp=window.stanzaFromProgress;
      var wrap=function(p){
        if(onAbend()) return idxAt(tNow());
        return sp.apply(this, arguments);
      };
      wrap._bpp212=1;
      window.stanzaFromProgress=wrap;
    }
    if(onAbend()) show(idxAt(tNow()));
  }
  hook();
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", hook);
  window.addEventListener("load", hook);
  setInterval(hook, 500);
  try{
    if("serviceWorker" in navigator){
      navigator.serviceWorker.register("sw.js?v=212", {scope:"./"}).then(function(r){ if(r.waiting) r.waiting.postMessage({type:"skipWaiting"}); });
    }
  }catch(e){}
  function showV(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V2.12"; document.title="Bhakti Prayers Player V2.12"; }
  setTimeout(showV, 1800); setTimeout(showV, 3200);
})();

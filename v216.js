/* [Grok.com] V2.16: Abend-Aufnahme ohne Om. Die alte Datei mit Om ist nicht das 21. Stueck.
   Offline-Liste bleibt 20. Die alte Cache-Kopie wird geloescht. */
window.BPP_BUILD="2.16";
window.BPP_SW="sw.js?v=216";
(function(){
  if(window.bppV216b) return; window.bppV216b=1;
  var FILE="audio/guru-stotram-abend2.mp3";
  function point(){
    if(typeof PRAYERS==="undefined") return;
    var P=PRAYERS.find(function(p){ return p.id==="guru-stotram-abend"; });
    if(!P) return;
    P.audio=FILE;
    P.audioAlt=[FILE];
    P.preferFile=true;
  }
  function dropOld(){
    if(!("caches" in window)) return;
    caches.open("bpp-audio-v1").then(function(c){
      return c.keys().then(function(ks){
        ks.forEach(function(q){ if(/guru-stotram-abend\.mp3/.test(q.url)) c.delete(q); });
      });
    }).catch(function(){});
  }
  function recount(){
    point(); dropOld();
    try{ if(typeof window.bppOfflineRun==="function") window.bppOfflineRun(); }catch(e){}
  }
  point(); dropOld();
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", recount);
  window.addEventListener("load", function(){ setTimeout(recount, 800); setTimeout(recount, 4000); });
  setInterval(point, 1500);
  try{ if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js?v=216", {scope:"./"}); }catch(e){}
  function showV(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V2.16"; document.title="Bhakti Prayers Player V2.16"; }
  setTimeout(showV, 1800); setTimeout(showV, 3600);
})();

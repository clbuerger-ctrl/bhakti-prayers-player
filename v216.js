/* [Grok.com] V2.16: Abend-Aufnahme ohne Om unter neuem Namen, damit der Offline-Speicher
   die alte Datei mit Om nicht weiter ausliefert. Die alte Cache-Kopie wird geloescht. */
window.BPP_BUILD="2.16";
window.BPP_SW="sw.js?v=216";
(function(){
  if(window.bppV216) return; window.bppV216=1;
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
  point(); dropOld();
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", function(){ point(); dropOld(); });
  window.addEventListener("load", function(){ point(); dropOld(); });
  setInterval(point, 1000);
  try{
    if("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js?v=216", {scope:"./"});
  }catch(e){}
  function showV(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V2.16"; document.title="Bhakti Prayers Player V2.16"; }
  setTimeout(showV, 1800); setTimeout(showV, 3600);
})();

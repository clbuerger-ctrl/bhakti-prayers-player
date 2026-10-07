/* [Grok-Bot] V2.08: Offline-Speicher beim Neustart: nur fehlende oder auf dem Server geaenderte MP3 werden geladen (Groessenvergleich per HEAD,
   nicht mehr per ETag - das ETag von GitHub Pages aendert sich bei jedem Deploy und loeste sonst jedes Mal 126 MB Neuladen aus).
   Der Stand ("Offline gespeichert: 20/20 \u2713") steht sofort beim Start da (v203.js?v=208). */
window.BPP_BUILD="2.08";
(function(){
  function showV(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V2.08"; document.title="Bhakti Prayers Player V2.08"; }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", showV); else showV();
  setTimeout(showV, 900); setTimeout(showV, 1500); setTimeout(showV, 2500);
})();

/* [Grok-Bot] V2.06: "Wiederholen: ganze Liste" spielt am Ende eines Gebets durch ALLE Gebete weiter (Reihenfolge wie Vor/Zurueck aus V2.05,
   Ansicht "Alle", ohne Doppelte, ohne Ton uebersprungen, am Ende wieder von vorn), unabhaengig vom Filter. Das Ende-Angebot "Naechstes" ebenso
   (v183.js?v=206: neighbor() nutzt bppAllNb aus v205.js). */
window.BPP_BUILD="2.06";
(function(){
  function showV(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V2.06"; document.title="Bhakti Prayers Player V2.06"; }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", showV); else showV();
  setTimeout(showV, 900); setTimeout(showV, 1500); setTimeout(showV, 2500);
})();

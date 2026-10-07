/* [Grok-Bot] V2.02: Grossbild-Tippmenue blendet schneller aus (4 s statt 6 s, nach Tastendruck 1,5 s; Aenderung in v194.js?v=202). Nur Versionsanzeige. */
window.BPP_BUILD="2.02";
(function(){
  if(window.bppV202) return; window.bppV202=1;
  function show(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V2.02"; document.title="Bhakti Prayers Player V2.02"; }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", show); else show();
  setTimeout(show, 900); setTimeout(show, 1500);
})();

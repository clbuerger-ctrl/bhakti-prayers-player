/* [Grok.com] V2.10: Guru Stotram Abend — Autotiming neu gemessen.
   Die Aufnahme beginnt mit einem Om (etwa 2,7–10,8 s). Das Om ist keine Strophe.
   Strophe 1 setzt erst danach ein. 14 Heft-Strophen, letzte (tvam eva) zweimal. */
window.BPP_BUILD="2.10";
(function(){
  if(window.bppV210) return; window.bppV210=1;
  /* Sekunden, MP3 audio/guru-stotram-abend.mp3, nach dem Om */
  var MARKS=[11.0, 28.1, 46.5, 62.5, 78.5, 96.5, 114.6, 130.2, 147.6, 167.5, 182.4, 199.6, 217.7, 236.4];
  function apply(){
    if(typeof PRAYERS==="undefined") return;
    var P=PRAYERS.find(function(p){ return p.id==="guru-stotram-abend"; });
    if(!P) return;
    P.marksFile=MARKS.slice();
    P._bppEstMarks=0;
    P._bppEstSrc="file";
    P._bppOmSkip=11.0;
  }
  apply();
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", apply);
  window.addEventListener("load", apply);
  setTimeout(apply, 400);
  setTimeout(apply, 1500);
  function showV(){
    var v=document.querySelector("h1 .ver");
    var s="V"+(window.BPP_SHOW||"2.10"); /* [Grok-Bot] V2.20: Anzeige folgt BPP_SHOW */
    if(v) v.textContent=s;
    document.title="Bhakti Prayers Player "+s;
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", showV); else showV();
  setTimeout(showV, 1200); setTimeout(showV, 2600);
})();

/* [Grok.com] Hanuman Chalisa wieder die vorherige YouTube-Aufnahme rhSVddEZW88.
   Die Datei bleibt nur Ersatz. */
(function(){
  function apply(){
    if(typeof PRAYERS==="undefined") return;
    var h=PRAYERS.find(function(p){ return p.id==="hanuman"; });
    if(!h) return;
    h.youtube="rhSVddEZW88";
    h.preferFile=false;
    try{
      var ch=JSON.parse(localStorage.getItem("bpp-src")||"{}")||{};
      if(ch.hanuman==="file"){ delete ch.hanuman; localStorage.setItem("bpp-src", JSON.stringify(ch)); }
    }catch(e){}
  }
  apply();
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", apply);
  setTimeout(apply, 500);
  setInterval(apply, 1500);
})();

/* [Grok.com] Mataji Bhavani: beide Ramaji-Zeilen aus den Lyrics, auch wenn eine alte Datei sie nachtraeglich setzt. */
(function(){
  function strip(){
    if(typeof PRAYERS==="undefined") return;
    var b=PRAYERS.find(function(p){ return p.id==="hanuman-bhavani"; });
    if(!b||!b.zeilen) return;
    var n=b.zeilen.filter(function(z){ return !/r[aā]maji se r[aā]ma/i.test(z.sa||""); });
    var changed=n.length!==b.zeilen.length;
    n.forEach(function(z,i){ if(z.x2){ z.x2=false; changed=true; } z.nr=String(i+1); });
    if(changed){ b.zeilen=n; try{ if(typeof paintLyrics==="function") paintLyrics(); }catch(e){} }
  }
  strip();
  setInterval(strip, 500);
  document.addEventListener("DOMContentLoaded", strip);
})();

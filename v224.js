/* [Grok.com] Hanuman Chalisa wieder die vorherige YouTube-Aufnahme fBw-BSoZGgM.
   Die Datei bleibt nur Ersatz. */
(function(){
  function apply(){
    if(typeof PRAYERS==="undefined") return;
    var h=PRAYERS.find(function(p){ return p.id==="hanuman"; });
    if(!h) return;
    h.youtube="fBw-BSoZGgM";
    h.preferFile=false;
    /* [Grok.com] Autoscroll am 8:55-Video. Anker sind die gemessenen Pausen, die Verse dazwischen gleichmaessig. */
    var seq=[[26,0],[47.4,1],[69.3,2]]; /* [Grok.com] bis 26 s nur Instrumental, Strophe 1 ab 26 */
    var a=69.3, b=452, n=20;
    for(var i=0;i<n;i++) seq.push([Math.round((a+(b-a)*i/n)*10)/10, 4+i]);
    seq.push([454.5,24],[508,25]);
    h.seqYt=seq;
    var m=[]; seq.forEach(function(e){ if(m[e[1]]==null) m[e[1]]=e[0]; });
    h.marksYt=m;
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

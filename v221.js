/* [Grok.com] Reihenfolge wie im Prathana-Heft. Abspielen in dieser Folge.
   Morgen, dann Abend, dann Vedische Gesaenge (Inhaltsverzeichnis S. 51: Mukunda Mala ist im Player, die Sukten noch nicht). */
(function(){
  var ORDER=["guru-stotram","ashtotram","vaishnava-mantra","guruji-gayatri","gayatri","ganesha-mantra","suprabhatam","govinda","narasimha","ramanuja","vishnu-arati","lakshmi-arati","closing-morning","guru-stotram-abend","kavacham","narasimha-abend","hanuman","bhajare","guru-arati","giridhari-arati","closing-evening","mukunda"];
  function apply(){
    if(typeof PRAYERS==="undefined") return;
    var rank={}; ORDER.forEach(function(id,n){ rank[id]=n; });
    var rows=PRAYERS.map(function(p,n){ return {p:p,n:n}; });
    rows.sort(function(a,b){
      var ra=rank[a.p.id], rb=rank[b.p.id];
      if(ra==null) ra=500; if(rb==null) rb=500;
      return ra-rb || a.n-b.n;
    });
    PRAYERS.length=0;
    rows.forEach(function(r){ PRAYERS.push(r.p); });
  }
  apply();
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", apply);
  setTimeout(apply, 400);
})();

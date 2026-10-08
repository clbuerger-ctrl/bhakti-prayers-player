/* [Grok.com] Mataji Bhavani (Russia): Mangala Murti ist die Doha.
   Beide Ramaji-Zeilen sind draussen. Siya vara gibt es hier nicht. */
(function(){
  if(typeof PRAYERS==="undefined") return;
  var old=PRAYERS.findIndex(function(p){ return p.id==="hanuman-bhavani"; });
  if(old>=0) PRAYERS.splice(old, 1);
  var src=PRAYERS.find(function(p){ return p.id==="hanuman"; });
  if(!src) return;
  var zeilen=src.zeilen.map(function(z){ return {nr:z.nr, ch:z.ch, sa:z.sa, ue:z.ue, en:z.en}; });
  zeilen=zeilen.filter(function(z){ return !/siyā vara rāmacandra pada/.test(z.sa||""); });
  zeilen.unshift({
    nr:"1", ch:"D     C     G     D",
    sa:"maṅgala mūrti maruta nandana\nsakala amaṅgala mula nikandana",
    ue:"Dohā. Sohn des Windes, Bild des Segens, der alles Unheil an der Wurzel ausreißt.",
    en:"Doha. Son of the wind, embodiment of blessing, who uproots all misfortune."
  });
  zeilen=zeilen.filter(function(z){ return !/rāmaji se rāma/.test(z.sa||""); });
  zeilen.forEach(function(z,i){ z.nr=String(i+1); z.x2=false; });
  PRAYERS.push({
    id:"hanuman-bhavani",
    titel:"Śrī Hanumān Cālīsā · Mataji Bhavani (Russia)",
    autor:"Tulasīdāsa · Bhakti Marga Prayers",
    audio:"audio/hanuman.mp3",
    preferFile:true,
    quelle:"Ton: Mataji Bhavani (Russia)",
    hinweis:"Mangala Murti wird mehrmals gesungen, danach Sri Guru carana.",
    zeilen:zeilen,
    seqFile:[[8.7,0],[16,0],[24,0],[32,0],[44.2,1],[59.8,2]]
  });
  function strip(){
    var b=PRAYERS.find(function(p){ return p.id==="hanuman-bhavani"; });
    if(!b||!b.zeilen) return;
    var n=b.zeilen.filter(function(z){ return !/rāmaji se rāma/.test(z.sa||""); });
    if(n.length!==b.zeilen.length){ b.zeilen=n; b.zeilen.forEach(function(z,i){ z.nr=String(i+1); z.x2=false; }); }
  }
  strip(); setInterval(strip, 800);
})();

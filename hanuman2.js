/* [Grok.com] Mataji Bhavani (Russia): Mangala Murti ist die Doha.
   Ramaji se Rama nur nach der 2. Strophe. Siya vara gibt es hier nicht. */
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
  zeilen.splice(2, 0, {
    nr:"3", ch:"D",
    sa:"rāmaji se rāma rāma kahiyo kahiyo-ji hanumāna-ji",
    ue:"Hanumanji, sag Ramaji für uns „Rama, Rama“.",
    en:"Hanumanji, say Rama, Rama to Ramaji for us."
  });
  zeilen.forEach(function(z,i){ z.nr=String(i+1); z.x2=false; });
  PRAYERS.push({
    id:"hanuman-bhavani",
    titel:"Śrī Hanumān Cālīsā · Mataji Bhavani (Russia)",
    autor:"Tulasīdāsa · Bhakti Marga Prayers",
    audio:"audio/hanuman.mp3",
    preferFile:true,
    quelle:"Ton: Mataji Bhavani (Russia)",
    hinweis:"Mangala Murti ist die Dohā. Ramaji se Rama nur nach der zweiten Strophe.",
    zeilen:zeilen
  });
})();

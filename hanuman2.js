/* [Grok.com] Zweites Hanuman Chalisa: Pandita Bhavani, mit Mangala Murti und Refrain. Unter Weitere. */
(function(){
  if(typeof PRAYERS==="undefined" || PRAYERS.some(function(p){ return p.id==="hanuman-bhavani"; })) return;
  var src=PRAYERS.find(function(p){ return p.id==="hanuman"; });
  if(!src) return;
  var zeilen=src.zeilen.map(function(z){ return {nr:z.nr, ch:z.ch, sa:z.sa, ue:z.ue, en:z.en}; });
  var third=zeilen[2];
  if(third) third.sa="siyā vara rāmacandra pada jai śaraṇam\nrāmaji se rāma rāma kahiyo kahiyo-ji hanumāna-ji";
  zeilen.unshift({
    nr:"1", ch:"D     C     G     D",
    sa:"maṅgala mūrti maruta nandana\nsakala amaṅgala mula nikandana",
    ue:"Sohn des Windes, Bild des Segens, der alles Unheil an der Wurzel ausreißt.",
    en:"Son of the wind, embodiment of blessing, who uproots all misfortune."
  });
  zeilen.forEach(function(z,i){ z.nr=String(i+1); });
  PRAYERS.push({
    id:"hanuman-bhavani",
    titel:"Śrī Hanumān Cālīsā · Mataji Bhavani (Russia)",
    autor:"Tulasīdāsa · Bhakti Marga Prayers",
    audio:"audio/hanuman.mp3",
    preferFile:true,
    quelle:"Ton: Mataji Bhavani (Russia)",
    hinweis:"Mit der Einleitung Mangala Murti und dem Refrain Ramaji se Rama.",
    zeilen:zeilen,
    seqFile:[[8.7,0],[44.2,1],[59.8,2],[101.1,3],[115.3,4],[133.3,3],[152.9,5],[166.5,6],[183.4,3],[202.2,7],[215.1,8],[231.5,3],[249.9,9],[262.5,10],[278.5,3],[296.6,11],[309.1,12],[324.9,3],[340.3,13],[352.5,14],[366.2,3],[381.8,15],[392.4,16],[405.7,3],[421.0,17],[431.3,18],[444.5,3],[459.8,19],[470.1,20],[483.2,3],[494.0,21],[508.3,22],[521.2,3],[536.2,23],[551.3,24],[583.4,25],[616.6,3],[639.3,26]]
  });
})();

/* [Grok.com] Paramahamsa Vishwananda Chalisa. Ton aus Dropbox. Birthday Prayer nicht. */
(function(){
  if(typeof PRAYERS==="undefined" || PRAYERS.some(function(p){ return p.id==="vchalisa"; })) return;
  PRAYERS.push({
    id:"vchalisa",
    titel:"Paramahamsa Vishwananda Cālīsā",
    autor:"Sri Vitthal Dham · Heft S. 36",
    quelle:"Dropbox · Bhakti Yoga Mantras, Paramahamsa Sri Swami Vishwananda Chalisa",
    audio:"audio/vishwananda-chalisa.mp3",
    preferFile:true,
    zeilen:[
      {nr:"1", ch:"", sa:"paramahaṁsa śrī svāmī vishwananda cālīsā", ue:"Text folgt aus dem Heft, Seite 36. Der Ton ist die Aufnahme aus der Dropbox.", en:"The text follows from the booklet, page 36. The recording is the Dropbox file."}
    ]
  });
})();

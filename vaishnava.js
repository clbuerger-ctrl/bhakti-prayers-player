/* [Grok.com] Vaishnava Mantra nach der besseren Heftaufnahme, Capo 0 bis +2, Akkord C. */
(function(){
  if(typeof PRAYERS==="undefined") return;
  var alt=PRAYERS.findIndex(function(p){ return p.id==="vaishnava-mantra"; });
  if(alt>=0) PRAYERS.splice(alt, 1);
  function v(n, sa, ue, en, ch){ return {nr:String(n), ch:ch||"", sa:sa, ue:ue, en:en}; }
  PRAYERS.push({
    id:"vaishnava-mantra",
    titel:"Vai\u1e63\u1e47ava Mantra",
    autor:"\u1e5agveda 1.22.16\u201321 \u00b7 Bhakti Marga Prayers",
    audio:"audio/vaishnava-mantra.mp3",
    preferFile:true,
    youtube:"QjYfK3u6rbs",
    quelle:"Prathana with chords \u00b7 Sri Vitthal Dham \u00b7 S. 10",
    hinweis:"Capo 0 bis +2. Zeilen wie in der Heftvorlage.",
    zeilen:[
      v(1, "ato dev\u0101 avantu no yato vi\u1e63\u1e47ur vicakrame\np\u1e5bthivy\u0101\u1e25 sapta dh\u0101mabhi\u1e25",
        "M\u00f6gen die Halbg\u00f6tter uns auf der Erde besch\u00fctzen, von wo aus Vi\u1e63\u1e47u Seine Schritte tat.",
        "May the demigods preserve us on the Earth whence Vishnu stepped.", "C"),
      v(2, "ida\u1e43 vi\u1e63\u1e47ur vicakrame tredh\u0101 nidadhe padam\nsamudham asya pa(g)ṁ sure",
        "Vi\u1e63\u1e47u durchschritt diese Welt. Dreimal setzte Er Seinen Fu\u00df, und die Welt wurde im Staub Seines Fu\u00dfabdrucks gesammelt.",
        "Vishnu walked this world; three times He planted His foot, and the world was collected in the dust of His footstep."),
      v(3, "tr\u012b\u1e47i pad\u0101 vicakrame vi\u1e63\u1e47ur gop\u0101 ad\u0101bhya\u1e25\nato dharm\u0101\u1e47i dh\u0101rayane",
        "Der unbesiegbare Hirte tat drei Schritte und hielt die rechtschaffenen Handlungen.",
        "The invincible protector stepped three steps, upholding righteous acts."),
      v(4, "vi\u1e63\u1e47o\u1e25 karm\u0101\u1e47i pa\u015byata yato vrat\u0101ni paspa\u015be\nindrasya yujya\u1e25 sakh\u0101",
        "Seht die Taten Vi\u1e63\u1e47us. Er ist der w\u00fcrdige Freund Indras.",
        "Behold the deeds of Vishnu. He is the worthy friend of Indra."),
      v(5, "tad vi\u1e63\u1e47o\u1e25 parama\u1e43 pada(g)\u1e41 sad\u0101 pa\u015byanti s\u016braya\u1e25\ndiv\u012bva cak\u1e63ur \u0101tatam",
        "Die Weisen sehen stets das h\u00f6chste Reich Vi\u1e63\u1e47us, wie das Auge am Himmel.",
        "The wise always see Vishnu's supreme abode, like the eye stretched across the sky."),
      v(6, "tad vipr\u0101so vipanyavo j\u0101g\u1e5bv\u0101(g)\u1e41 sa\u1e25 samindhate\nvi\u1e63\u1e47or yat parama\u1e43 padam",
        "Die wachen Gottgeweihten offenbaren das h\u00f6chste Reich Vi\u1e63\u1e47us.",
        "The awake devotees reveal the supreme abode of Vishnu.")
    ],
    seqFile:[[1.7,0],[11.0,1],[19.8,2],[29.1,3],[38.6,4],[48.6,5]]
  });
})();

/* [Grok.com] Vaishnava Mantra wie Heft S. 10: sechs Strophen, je zwei Zeilen. Capo 0 bis +2. */
(function(){
  if(typeof PRAYERS==="undefined") return;
  var alt=PRAYERS.findIndex(function(p){ return p.id==="vaishnava-mantra"; });
  if(alt>=0) PRAYERS.splice(alt, 1);
  function v(n, sa, ue, en){ return {nr:String(n), ch:"", sa:sa, ue:ue, en:en}; }
  PRAYERS.push({
    id:"vaishnava-mantra",
    titel:"Vaiṣṇava Mantra",
    autor:"Ṛgveda 1.22.16–21 · Bhakti Marga Prayers",
    audio:"audio/vaishnava-mantra.mp3",
    preferFile:true,
    youtube:"QjYfK3u6rbs",
    quelle:"Prathana with chords · Sri Vitthal Dham · S. 10",
    hinweis:"Capo 0 bis +2. Sechs Strophen zu zwei Zeilen wie im Heft.",
    zeilen:[
      v(1, "ato devā avantu no yato viṣṇur vicakrame\npṛthivyāḥ sapta dhāmabhiḥ",
        "Mögen die Halbgötter uns auf der Erde beschützen, von wo aus Viṣṇu Seine Schritte tat.",
        "May the demigods preserve us on the Earth whence Vishnu stepped."),
      v(2, "idaṃ viṣṇur vicakrame tredhā nidadhe padam\nsamūḷham asya pāṃsure",
        "Viṣṇu durchschritt diese Welt. Dreimal setzte Er Seinen Fuß.",
        "Vishnu walked this world and planted His foot three times."),
      v(3, "trīṇi padā vicakrame viṣṇur gopā adābhyaḥ\nato dharmāṇi dhārayane",
        "Der unbesiegbare Hirte tat drei Schritte und hielt die rechtschaffenen Handlungen.",
        "The invincible protector stepped three steps, upholding righteous acts."),
      v(4, "viṣṇoḥ karmāṇi paśyata yato vratāni paspaśe\nindrasya yujyaḥ sakhā",
        "Seht die Taten Viṣṇus. Er ist der würdige Freund Indras.",
        "Behold the deeds of Vishnu. He is the worthy friend of Indra."),
      v(5, "tad viṣṇoḥ paramaṃ padaṃ sadā paśyanti sūrayaḥ\ndivīva cakṣur ātatam",
        "Die Weisen sehen stets das höchste Reich Viṣṇus, wie das Auge am Himmel.",
        "The wise always see Vishnu's supreme abode, like the eye stretched across the sky."),
      v(6, "tad viprāso vipanyavo jāgṛvāṃ saḥ samindhate\nviṣṇor yat paramaṃ padam",
        "Die wachen Gottgeweihten offenbaren das höchste Reich Viṣṇus.",
        "The awake devotees reveal the supreme abode of Vishnu."),
      v(7, "oṃ śāntiḥ śāntiḥ śāntiḥ",
        "OM, Frieden, Frieden, Frieden.",
        "OM, peace, peace, peace.")
    ],
    seqFile:[[1.7,0],[11.0,1],[19.8,2],[29.1,3],[38.6,4],[48.6,5],[58.5,6]]
  });
})();

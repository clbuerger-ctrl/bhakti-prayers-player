/* [Grok.com] Vaishnava Mantra, Heft S. 8: sechs Strophen und om shantih. Ton audio/vaishnava-mantra.mp3 */
(function(){
  if(typeof PRAYERS==="undefined" || PRAYERS.some(function(p){ return p.id==="vaishnava-mantra"; })) return;
  function v(n, sa, ue, en){ return {nr:String(n), ch:"", sa:sa, ue:ue, en:en}; }
  PRAYERS.push({
    id:"vaishnava-mantra",
    titel:"Vaiṣṇava Mantra",
    autor:"Ṛgveda 1.22.16–21 · Bhakti Marga Prayers",
    audio:"audio/vaishnava-mantra.mp3",
    preferFile:true,
    youtube:"QjYfK3u6rbs",
    quelle:"Prathana with chords · Sri Vitthal Dham · S. 8",
    hinweis:"Sechs Strophen und om śāntiḥ. Ton aus der Morgengebet-Aufnahme.",
    zeilen:[
      v(1, "ato devā avantu no\nyato viṣṇur vicakrame\npṛthivyāḥ sapta dhāmabhiḥ",
        "Mögen die Halbgötter uns auf der Erde beschützen, von wo aus Viṣṇu, von den sieben Versmaßen unterstützt, Seine Schritte tat.",
        "May the demigods preserve us on the Earth whence Vishnu, aided by the seven metres, stepped."),
      v(2, "idaṃ viṣṇur vi cakrame\ntredhā ni dadhe padam\nsamūḷham asya pāṃsure",
        "Viṣṇu durchschritt diese ganze Welt. Dreimal setzte Er Seinen Fuß, und die ganze Welt wurde im Staub Seines Fußabdrucks gesammelt.",
        "Vishnu walked across this whole world; three times He planted His foot, and the whole world was collected in the dust of His footstep."),
      v(3, "trīṇi padā vi cakrame\nviṣṇur gopā adābhyaḥ\nato dharmāṇi dhārayan",
        "Viṣṇu, der Erhalter, der Unbesiegbare, tat drei Schritte und hielt dadurch die rechtschaffenen Handlungen aufrecht.",
        "Vishnu, the Preserver, the invincible, stepped three steps, thereby upholding righteous acts."),
      v(4, "viṣṇoḥ karmāṇi paśyata\nyato vratāni paspaśe\nindrasya yujyaḥ sakhā",
        "Seht die Spiele Viṣṇus, durch die der Gottgeweihte fromme Taten vollbringt. Er ist der würdige Freund Indras.",
        "Behold the pastimes of Lord Vishnu, through which the devotee accomplishes pious activities. That devotee is the worthy friend of Indra."),
      v(5, "tad viṣṇoḥ paramaṃ padaṃ\nsadā paśyanti sūrayaḥ\ndivīva cakṣur ātatam",
        "So wie die Strahlen der Sonne am Himmel sichtbar sind, sehen die Weisen stets das Reich Viṣṇus.",
        "Just as the sun's rays in the sky are visible, the wise always see the abode of Lord Vishnu."),
      v(6, "tad viprāso vipanyavo\njāgṛvāṃsaḥ sam indhate\nviṣṇor yat paramaṃ padam",
        "Weil diese wachen Gottgeweihten die spirituelle Welt sehen, können sie das höchste Reich Viṣṇus offenbaren.",
        "Because those awake devotees can see the spiritual world, they reveal that supreme abode of Lord Vishnu."),
      v(7, "oṃ śāntiḥ śāntiḥ śāntiḥ",
        "OM, Frieden, Frieden, Frieden.",
        "OM, peace, peace, peace.")
    ],
    seqFile:[[1.7,0],[11.0,1],[19.8,2],[29.1,3],[38.6,4],[48.6,5],[58.5,6]]
  });
})();

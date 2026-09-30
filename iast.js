/* [Grok.com] V1.31 IAST-Lyrics vierzeilig wie Prathana-Heft S. 38-42 */
(function(){
  var m = PRAYERS.find(function(p){ return p.id==="mukunda"; });
  if(!m) return;
  var iast = [
    "ghu\u1e63yate yasya nagare\nra\u1e45ga-y\u0101tr\u0101 dine-dine |\ntam aha\u1e43 \u015biras\u0101 vande\nr\u0101j\u0101na\u1e43 kula\u015bekharam ||",
    "\u015br\u012b-vallabheti varadeti day\u0101pareti\nbhakta-priyeti bhava-lu\u1e47\u1e6dhana-kovideti |\nn\u0101theti n\u0101ga-\u015bayaneti jagan-niv\u0101seti\n\u0101l\u0101pana\u1e43 prati-dina\u1e43 kuru me mukunda ||"
  ];
  /* remaining verses filled below */
  m.hinweisDe = "Strophen vierzeilig wie im Prathana-Heft Seiten 38 bis 42.";
  m.hinweisEn = "Stanzas in four booklet lines, Prathana pages 38 to 42.";
})();

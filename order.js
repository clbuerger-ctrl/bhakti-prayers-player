/* [Grok-Bot] V1.51: Guru Stotram mit den Abend-Akkorden aus dem Heft S. 17 (Am G / F G / Am G / F E), passend zur Abend-Aufnahme */
/* [Grok-Bot] V1.50: Guru Stotram mit anderer Aufnahme (BM Prayers, Guru Stotram evening) */
/* [Grok-Bot] V1.49: Guru Stotram bekommt Ton (Dropbox Guru-Stotram.mp3); Prayers in der Reihenfolge des Prathana-Hefts: Morgengebet, Abendgebet, weitere, Vedic Chants */
(function(){
  var g = PRAYERS.find(function(p){ return p.id==="guru-stotram"; });
  if(g && !g.audio){
    g.audio = "https://www.dropbox.com/scl/fo/9jrivp0fkl4bfo9t0dejx/AGEKF5xxUyuwQnJzfScG7YU/Guru-Stotram-Abend.mp3?rlkey=s8lox2d2652b2i133h1jjty3k&dl=1";
    g.preferFile = true;
    g.quelle = (g.quelle ? g.quelle + " · " : "") + "Ton: BM Prayers · Guru Stotram (evening)";
  }
  if(g){
    var EV = { a:"Am                   G", b:"F                    G", c:"Am                   G", d:"F                    E" };
    g.zeilen.forEach(function(z){ var k = String(z.nr).slice(-1); if(EV[k]) z.ch = EV[k]; });
    g.hinweis = g.hinweisDe = "Abendgebet, Musikerheft Seite 17: Am G / F G / Am G / F E.";
    g.quelle = String(g.quelle||"").replace("Morgengebet","Abendgebet");
    g.hinweisEn = "Evening prayers, musicians booklet page 17: Am G / F G / Am G / F E.";
  }
  var ORDER = ["guru-stotram","guruji-gayatri","gayatri","ganesha-mantra","suprabhatam","govinda","narasimha","ramanuja","vishnu-arati","final-prayers","kavacham","bhajare","lakshmi-arati","mukunda"];
  function rank(p){ var r = ORDER.indexOf(p.id); return r < 0 ? 999 : r; }
  var withPos = PRAYERS.map(function(p, n){ return { p:p, n:n }; });
  withPos.sort(function(x, y){ return (rank(x.p) - rank(y.p)) || (x.n - y.n); });
  PRAYERS.length = 0;
  withPos.forEach(function(o){ PRAYERS.push(o.p); });
})();

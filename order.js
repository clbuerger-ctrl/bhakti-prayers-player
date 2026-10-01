/* [Grok-Bot] V1.49: Guru Stotram bekommt Ton (Dropbox Guru-Stotram.mp3); Prayers in der Reihenfolge des Prathana-Hefts: Morgengebet, Abendgebet, weitere, Vedic Chants */
(function(){
  var g = PRAYERS.find(function(p){ return p.id==="guru-stotram"; });
  if(g && !g.audio){
    g.audio = "https://www.dropbox.com/scl/fo/9jrivp0fkl4bfo9t0dejx/AHxwpU6Xttm9wzQ47RfwNiM/Guru-Stotram.mp3?rlkey=s8lox2d2652b2i133h1jjty3k&dl=1";
    g.preferFile = true;
    g.quelle = (g.quelle ? g.quelle + " · " : "") + "Ton: Bhakti Marga Morning Prayers · Guru Stotram";
  }
  var ORDER = ["guru-stotram","guruji-gayatri","gayatri","ganesha-mantra","suprabhatam","govinda","narasimha","ramanuja","vishnu-arati","final-prayers","kavacham","bhajare","lakshmi-arati","mukunda"];
  function rank(p){ var r = ORDER.indexOf(p.id); return r < 0 ? 999 : r; }
  var withPos = PRAYERS.map(function(p, n){ return { p:p, n:n }; });
  withPos.sort(function(x, y){ return (rank(x.p) - rank(y.p)) || (x.n - y.n); });
  PRAYERS.length = 0;
  withPos.forEach(function(o){ PRAYERS.push(o.p); });
})();

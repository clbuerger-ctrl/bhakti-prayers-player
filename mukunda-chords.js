/* [Grok.com] Akkorde Mukunda Mala nach Heft Mukunda Mala Stotram_chords.pdf
   Das Heft setzt die Griffe blockweise über die Verse, nicht Silbe für Silbe. */
(function(){
  var m = PRAYERS.find(function(p){ return p.id==="mukunda"; });
  if(!m) return;
  var chs = [
    "C",
    "C     Fm",
    "Bbm    Fm",
    "C     G",
    "G     C",
    "C    (F)    C",
    "C",
    "C    (F)",
    "C",
    "Bb    C",
    "C",
    "C    (F)    G",
    "Bb",
    "Bb",
    "C",
    "C",
    "C",
    "C",
    "C",
    "C",
    "C",
    "C     Bb",
    "Bb",
    "Bb",
    "C",
    "C",
    "C",
    "C",
    "C     Bb",
    "C     Bb",
    "C",
    "C",
    "C",
    "C",
    "Fm    C",
    "C     Fm    Bb",
    "C",
    "C",
    "C     G",
    "G",
    "Bb    F"
  ];
  m.zeilen.forEach(function(z, n){
    if(chs[n]) z.ch = chs[n];
  });
  m.quelle = "Bhakti Marga Mix 12.12.2022 · Dropbox · Chords-Heft";
  m.hinweis = "Akkorde aus Mukunda Mala Stotram_chords.pdf. Heft setzt Griffe über Versblöcke. Knopf Akkorde.";
})();
(function(){
  var k = PRAYERS.find(function(p){ return p.id==="kavacham"; });
  if(!k) return;
  var loop = "Dm   Bb    C     Dm";
  k.zeilen.forEach(function(z){
    if(!z.ch) z.ch = loop;
  });
})();

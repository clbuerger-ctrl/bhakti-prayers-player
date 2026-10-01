/* [Grok-Bot] V1.47: Ramanuja Mangalam als neuer Prayer, Ton aus Dropbox, Text und Akkorde aus Ramanuja_Mangalam.pdf */
(function(){
  var audio = "https://www.dropbox.com/scl/fo/9jrivp0fkl4bfo9t0dejx/AHbLURUpJLp1dREEL45Qvx8/Ramanuja-Mangalam.mp3?rlkey=s8lox2d2652b2i133h1jjty3k&dl=1";
  var Rch = "A     E     A     E";
  var Rsa = "Rāmānuja Rāmānuja - Mangala Mangalame,\nYathirāja Rāmānuja - Mangala Mangalame";
  var Rde = "Ramanuja, Ramanuja, Segen über Segen. Ramanuja, König der Entsagenden, Segen über Segen.";
  var Ren = "Ramanuja, Ramanuja, auspiciousness upon auspiciousness. Ramanuja, king of renunciates, auspiciousness upon auspiciousness.";
  function v(n, ch, sa, ue, en){ return { nr:n, ch:ch, sa:sa, ue:ue, en:en }; }
  function R(){ return v("Refrain", Rch, Rsa, Rde, Ren); }
  PRAYERS.push({
    id: "ramanuja",
    titel: "Ramanuja Mangalam",
    autor: "Bhakti Marga Prayers",
    audio: audio,
    preferFile: true,
    quelle: "Dropbox · Ramanuja Mangalam (2).mp3 · Notenblatt Ramanuja_Mangalam.pdf",
    hinweis: "Text und Akkorde wie im Notenblatt. Übersetzung sinngemäß.",
    hinweisDe: "Text und Akkorde wie im Notenblatt. Übersetzung sinngemäß.",
    hinweisEn: "Lyrics and chords as on the sheet. Translation approximate.",
    zeilen: [
      R(),
      v("1a", "Bm     A", "Yatindraya Karuna Karaya - Mangala Mangalame,", "Dem Herrn der Entsagenden, dem Quell des Erbarmens, Segen über Segen.", "To the lord of renunciates, the source of compassion, auspiciousness."),
      v("1b", "Bm     A", "Prapatti Dharmaika Ratāya - Mangala Mangalame", "Dem, der ganz im Weg der Hingabe (Prapatti) aufgeht, Segen über Segen.", "To him wholly devoted to the path of surrender (prapatti), auspiciousness."),
      R(),
      v("2a", "Bm     A", "Saligram Pratishithaya - Mangala Mangalame,", "Dem, der in Saligram gegründet ist, Segen über Segen.", "To him established in Saligram, auspiciousness."),
      v("2b", "Bm     A", "Tridhanda Dhārine – Godhagrajaya - Mangala Mangalame", "Dem Träger des dreifachen Stabes, dem älteren Bruder Godas (Andal), Segen über Segen.", "To the bearer of the triple staff, elder brother of Goda (Andal), auspiciousness."),
      R(),
      v("3a", "Bm     A", "Rangesa Kainkary Rathaya Mangala Mangalame", "Dem, der sich am Dienst für den Herrn von Srirangam erfreut, Segen über Segen.", "To him who delights in serving the Lord of Srirangam, auspiciousness."),
      v("3b", "Bm     A", "Man Nathaya Dharinee Dharaya, Mangala Mangalame", "Meinem Herrn, der die Erde trägt, Segen über Segen.", "To my lord, upholder of the earth, auspiciousness."),
      R()
    ]
  });
})();

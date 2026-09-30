/* [Grok.com] Akkorde: Prathana with chords, Sri Vitthal Dham, 05.04.2024 */
(function(){
  function add(p){
    if(!window.PRAYERS) return;
    if(PRAYERS.some(function(x){ return x.id===p.id; })) return;
    PRAYERS.push(p);
  }
  function v(n, lines){
    return lines.map(function(L, i){
      return { nr: String(n)+(i?String.fromCharCode(97+i):"a"), ch:L[0], sa:L[1], ue:L[2]||"", en:L[3]||L[2]||"" };
    });
  }
  var Q="Prathana with chords · Sri Vitthal Dham · 05.04.2024";
  var g1="C                    G", g2="C", g3="G", g4="C";
  add({
    id:"guru-stotram",
    titel:"Guru Stotram",
    autor:"Morgengebet · Sri Vitthal Dham",
    quelle:Q,
    hinweis:"Musikerheft Seite 5: C / G / C / G / C. Capo 0.",
    hinweisEn:"Musicians booklet page 5: C / G / C / G / C. Capo 0.",
    zeilen: [].concat(
      v(1, [[g1,"akhaṇḍa maṇḍalākāraṃ","Der ungeteilte Kreis der Schöpfung"],[g2,"vyāptaṃ yena carācaram","von ihm durchdrungen, bewegt und unbewegt"],[g3,"tat padaṃ darśitaṃ yena","dessen Fuß er gezeigt hat"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(2, [[g1,"ajñāna timirāndhasya","Für den vom Dunkel der Unwissenheit Blinden"],[g2,"jñānāñjana śalākayā","mit der Salbe des Wissens"],[g3,"cakṣur unmīlitaṃ yena","öffnete er das Auge"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(3, [[g1,"gurur brahmā gurur viṣṇuḥ","Der Guru ist Brahmā, der Guru ist Viṣṇu"],[g2,"gurur devo maheśvaraḥ","der Guru ist Maheśvara"],[g3,"gurur sākṣāt paraṃ brahma","der Guru ist das höchste Brahman selbst"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(4, [[g1,"sthāvaraṃ jaṅgamaṃ vyāptaṃ","Standfestes und Bewegliches durchdringt er"],[g2,"yat kiñcit sacarācaram","was immer in der Schöpfung ist"],[g3,"tat padaṃ darśitaṃ yena","dessen Fuß er gezeigt hat"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(5, [[g1,"bābāji vyāpi yat sarvam","Bābājī durchdringt alles"],[g2,"trailokyaṃ sacarācaram","die drei Welten, bewegt und unbewegt"],[g3,"tat padaṃ darśitaṃ yena","dessen Fuß er gezeigt hat"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(6, [[g1,"sarva śruti śiroratna","Juwel auf dem Haupt aller Śruti"],[g2,"virājita padāmbujaḥ","dessen Lotosfuß erstrahlt"],[g3,"vedāntāmbuja sūryo yaḥ","Sonne der Lotosblüte des Vedānta"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(7, [[g1,"caitanyaḥ śāśvataḥ śānto","Bewusstsein, ewig, still"],[g2,"vyomātīto nirañjanaḥ","jenseits des Raums, unbefleckt"],[g3,"bindunāda kalātītaḥ","jenseits von Bindu, Nāda und Kalā"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(8, [[g1,"jñāna śakti samārūḍhaḥ","auf Wissen und Kraft ruhend"],[g2,"tattva mālā vibhūṣitaḥ","mit der Girlande der Tattvas geschmückt"],[g3,"bhukti mukti pradātā ca","Geber von Weltgenuss und Befreiung"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(9, [[g1,"aneka janma samprāpta","über viele Leben angesammelt"],[g2,"karma bandha vidāhine","löst er die Fessel des Karma"],[g3,"ātma jñāna pradānena","durch das Geben des Selbstwissens"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(10, [[g1,"śoṣaṇaṃ bhava sindhoś ca","er trocknet den Ozean des Werdens"],[g2,"jñāpanaṃ sāra sampadaḥ","und zeigt den wahren Reichtum"],[g3,"guroḥ pādodakaṃ samyak","das Wasser von den Füßen des Guru"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(11, [[g1,"na guror adhikaṃ tattvam","kein Tattva über dem Guru"],[g2,"na guror adhikaṃ tapaḥ","keine Askese über dem Guru"],[g3,"tattva jñānāt paraṃ nāsti","nichts über dem Wissen der Wirklichkeit"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(12, [[g1,"mannāthaḥ śrī jagannāthaḥ","mein Herr ist der Herr der Welt"],[g2,"madguruḥ śrī jagadguruḥ","mein Guru ist der Welt-Guru"],[g3,"madātmā sarva bhūtātmā","mein Selbst ist das Selbst aller Wesen"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(13, [[g1,"gurur ādir anādiś ca","der Guru ist Anfang und ohne Anfang"],[g2,"guruḥ parama daivatam","der Guru ist die höchste Gottheit"],[g3,"guroḥ parataraṃ nāsti","nichts ist höher als der Guru"],[g4,"tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]]),
      v(14, [[g1,"tvam eva mātā ca pitā tvam eva","du allein bist Mutter und Vater"],[g2,"tvam eva bandhuś ca sakhā tvam eva","du allein Freund und Gefährte"],[g3,"tvam eva vidyā draviṇaṃ tvam eva","du allein Wissen und Reichtum"],[g4,"tvam eva sarvaṃ mama deva deva","du allein alles, mein Gott der Götter"]])
    )
  });
  add({
    id:"guruji-gayatri",
    titel:"Gāyatrī Mantra of Paramahamsa Vishwananda",
    autor:"Sri Vitthal Dham",
    quelle:Q,
    hinweis:"Musikerheft: C  Bbm / C / Bbm C. Dreimal.",
    zeilen: v(1, [
      ["C                                 Bbm","oṃ premāvatārāya vidmahe","Wir erkennen den Avatāra der Liebe"],
      ["C","sadgurudevāya dhīmahi","wir sinnen auf den Satguru"],
      ["Bbm   C","tanno vishwananda pracodayāt","möge Vishwananda uns erleuchten"]
    ])
  });
  add({
    id:"ganesha-mantra",
    titel:"Gaṇeśa Mantra",
    autor:"Sri Vitthal Dham",
    quelle:Q,
    hinweis:"Musikerheft: C G / C / G / C.",
    zeilen: v(1, [
      ["C            G","oṃ vakratuṇḍa mahākāya","O gekrümmter Rüssel, großer Leib"],
      ["C","sūryakoti samaprabhā","Glanz wie Millionen Sonnen"],
      ["G","nirvighnaṃ kurume deva","nimm, Deva, jedes Hindernis"],
      ["C","sarva-kāryeṣu sarvadā","in allen Werken, immer"]
    ])
  });
  add({
    id:"gayatri",
    titel:"Gāyatrī Mantra",
    autor:"Sri Vitthal Dham",
    quelle:Q,
    hinweis:"Musikerheft: C / Bb / C / Bb C. Dreimal.",
    zeilen: v(1, [
      ["C","oṃ bhūr bhuvaḥ suvaḥ","Erde, Zwischenreich, Himmel"],
      ["Bb","tat savitur vareṇyam","jenes liebenswerte Licht des Savitar"],
      ["C","bhargo devasya dhīmahi","auf den Glanz des Gottes sinnen wir"],
      ["Bb              C","dhiyo yo naḥ pracodayāt","möge er unseren Geist erleuchten"]
    ])
  });
  add({
    id:"vishnu-arati",
    titel:"Śrī Viṣṇu Bhagavān Āratī",
    autor:"Sri Vitthal Dham",
    quelle:Q,
    hinweis:"Musikerheft: C G F. Refrain Om Jaya Jagadīśa Hare.",
    zeilen: [].concat(
      v(1, [
        ["C        G","oṃ jaya jagadīśa hare","Sieg, Herr der Welt, Hari"],
        ["C             G","svāmī jaya jagadīśa hare","Svāmī, Sieg Hari"],
        ["G     F    C","bhakta janoṃ ke saṅkaṭa","der Bhaktas Not"],
        ["G     F    C","dāsa janoṃ ke saṅkaṭa","der Diener Not"],
        ["G         F","kṣaṇa me dūra kare","nimmst du im Augenblick"],
        ["G        C","oṃ jaya jagadīśa hare","Sieg, Herr der Welt, Hari"]
      ]),
      v(2, [
        ["C","jo dhyāve phala pāve","wer dich betrachtet, erhält die Frucht"],
        ["G","duḥkha binase mana kā","das Leid des Geistes schwindet"],
        ["C         G","svāmī duḥkha binase mana kā","Svāmī, das Leid des Geistes schwindet"],
        ["G   F           C","sukha sampatti ghara āve","Glück und Fülle kommen ins Haus"],
        ["G    F","kaṣṭa miṭe tana kā","die Last des Körpers weicht"],
        ["G        C","oṃ jaya jagadīśa hare","Sieg, Herr der Welt, Hari"]
      ])
    )
  });
  add({
    id:"lakshmi-arati",
    titel:"Śrī Lakṣmī Mātā Āratī",
    autor:"Sri Vitthal Dham",
    quelle:Q,
    hinweis:"Musikerheft: C G F wie Viṣṇu-Āratī.",
    zeilen: v(1, [
      ["C                 G","oṃ jaya lakṣmī mātā","Sieg, Mutter Lakṣmī"],
      ["C             G","maiyā jaya lakṣmī mātā","Mutter, Sieg Lakṣmī"],
      ["G    F      C","tumako niśa dina sevata","Tag und Nacht dient man dir"],
      ["G              F","hara viṣṇu vidhātā","Hara, Viṣṇu, Vidhātā"],
      ["G          C","oṃ jaya lakṣmī mātā","Sieg, Mutter Lakṣmī"]
    ])
  });
  add({
    id:"final-prayers",
    titel:"Final Prayers — Tvam eva mātā",
    autor:"Sri Vitthal Dham",
    quelle:Q,
    hinweis:"Musikerheft Schlussgebete: C F G / Am G C.",
    zeilen: [].concat(
      v(1, [
        ["C          F      G","tvam eva mātā ca pitā tvam eva","du allein bist Mutter und Vater"],
        ["Am                 G  C","tvam eva bandhuś ca sakhā tvam eva","du allein Freund und Gefährte"],
        ["F        G","tvam eva vidyā draviṇaṃ tvam eva","du allein Wissen und Reichtum"],
        ["Am   C   G    C","tvam eva sarvaṃ mama deva deva","du allein alles, mein Gott der Götter"]
      ]),
      v(2, [
        ["C          Am","asato mā sad gamaya","vom Unwirklichen führe uns zum Wirklichen"],
        ["C      F    C","tamaso mā jyotir gamaya","vom Dunkel führe uns zum Licht"],
        ["G   F                 C","mṛtyor mā amṛtam gamaya","vom Tod führe uns zur Unsterblichkeit"],
        ["C   Bb    F      C","oṃ śāntiḥ śāntiḥ śāntiḥ","Frieden, Frieden, Frieden"]
      ])
    )
  });
  var s=PRAYERS.find(function(p){ return p.id==="suprabhatam"; });
  if(s){
    s.quelle=Q+" · Śrī Kṛṣṇa Suprabhātam";
    s.hinweis="Musikerheft: D C / D G D.";
    if(s.zeilen && s.zeilen[0]) s.zeilen[0].ch="D                         C";
  }
})();

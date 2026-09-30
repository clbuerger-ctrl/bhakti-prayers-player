/* [Grok.com] Akkorde aus BhaktiMargaPrayers & Playing Harmonium Version 6, Bhakta Das */
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
  var guruVers = [
    ["Am          G","akhaṇḍa maṇḍalākāraṃ","Der ungeteilte Kreis der Schöpfung"],
    ["F               G","vyāptaṃ yena carācaram","von ihm durchdrungen, bewegt und unbewegt"],
    ["Am         G","tat padaṃ darśitaṃ yena","dessen Fuß er gezeigt hat"],
    ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
  ];
  add({
    id:"guru-stotram",
    titel:"Guru Stotram",
    autor:"Morgengebet · Bhakti Marga Heft V6",
    quelle:"BhaktiMargaPrayers & Playing Harmonium, Bhakta Das",
    hinweis:"Akkorde Am G / F G / Am G / F E wie im Heft. Capo 0.",
    hinweisEn:"Chords Am G / F G / Am G / F E as in the booklet. Capo 0.",
    zeilen: [].concat(
      v(1, [
        ["Am          G","akhaṇḍa maṇḍalākāraṃ","Der ungeteilte Kreis der Schöpfung"],
        ["F               G","vyāptaṃ yena carācaram","von ihm durchdrungen, bewegt und unbewegt"],
        ["Am         G","tat padaṃ darśitaṃ yena","dessen Fuß er gezeigt hat"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(2, [
        ["Am          G","ajñāna timirāndhasya","Für den vom Dunkel der Unwissenheit Blinden"],
        ["F               G","jñānāñjana śalākayā","mit der Salbe des Wissens"],
        ["Am         G","cakṣur unmīlitaṃ yena","öffnete er das Auge"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(3, [
        ["Am          G","gurur brahmā gurur viṣṇuḥ","Der Guru ist Brahmā, der Guru ist Viṣṇu"],
        ["F               G","gurur devo maheśvaraḥ","der Guru ist Maheśvara"],
        ["Am         G","gurur sākṣāt paraṃ brahma","der Guru ist das höchste Brahman selbst"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(4, [
        ["Am          G","sthāvaraṃ jaṅgamaṃ vyāptaṃ","Standfestes und Bewegliches durchdringt er"],
        ["F               G","yat kiñcit sacarācaram","was immer in der Schöpfung ist"],
        ["Am         G","tat padaṃ darśitaṃ yena","dessen Fuß er gezeigt hat"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(5, [
        ["Am          G","bābāji vyāpi yat sarvam","Bābājī durchdringt alles"],
        ["F               G","trailokyaṃ sacarācaram","die drei Welten, bewegt und unbewegt"],
        ["Am         G","tat padaṃ darśitaṃ yena","dessen Fuß er gezeigt hat"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(6, [
        ["Am          G","sarva śruti śiroratna","Juwel auf dem Haupt aller Śruti"],
        ["F               G","virājita padāmbujaḥ","dessen Lotosfuß erstrahlt"],
        ["Am         G","vedāntāmbuja sūryo yaḥ","Sonne der Lotosblüte des Vedānta"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(7, [
        ["Am          G","caitanyaḥ śāśvataḥ śānto","Bewusstsein, ewig, still"],
        ["F               G","vyomātīto nirañjanaḥ","jenseits des Raums, unbefleckt"],
        ["Am         G","bindunāda kalātītaḥ","jenseits von Bindu, Nāda und Kalā"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(8, [
        ["Am          G","jñāna śakti samārūḍhaḥ","auf Wissen und Kraft ruhend"],
        ["F               G","tattva mālā vibhūṣitaḥ","mit der Girlande der Tattvas geschmückt"],
        ["Am         G","bhukti mukti pradātā ca","Geber von Weltgenuss und Befreiung"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(9, [
        ["Am          G","aneka janma samprāpta","über viele Leben angesammelt"],
        ["F               G","karma bandha vidāhine","löst er die Fessel des Karma"],
        ["Am         G","ātma jñāna pradānena","durch das Geben des Selbstwissens"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(10, [
        ["Am          G","śoṣaṇaṃ bhava sindhoś ca","er trocknet den Ozean des Werdens"],
        ["F               G","jñāpanaṃ sāra sampadaḥ","und zeigt den wahren Reichtum"],
        ["Am         G","guroḥ pādodakaṃ samyak","das Wasser von den Füßen des Guru"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(11, [
        ["Am          G","na guror adhikaṃ tattvam","kein Tattva über dem Guru"],
        ["F               G","na guror adhikaṃ tapaḥ","keine Askese über dem Guru"],
        ["Am         G","tattva jñānāt paraṃ nāsti","nichts über dem Wissen der Wirklichkeit"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(12, [
        ["Am          G","mannāthaḥ śrī jagannāthaḥ","mein Herr ist der Herr der Welt"],
        ["F               G","madguruḥ śrī jagadguruḥ","mein Guru ist der Welt-Guru"],
        ["Am         G","madātmā sarva bhūtātmā","mein Selbst ist das Selbst aller Wesen"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(13, [
        ["Am          G","gurur ādir anādiś ca","der Guru ist Anfang und ohne Anfang"],
        ["F               G","guruḥ parama daivatam","der Guru ist die höchste Gottheit"],
        ["Am         G","guroḥ parataraṃ nāsti","nichts ist höher als der Guru"],
        ["F        E","tasmai śrī gurave namaḥ","dem Śrī Guru Verehrung"]
      ]),
      v(14, [
        ["Am          G","tvam eva mātā ca pitā tvam eva","du allein bist Mutter und Vater"],
        ["F               G","tvam eva bandhuś ca sakhā tvam eva","du allein Freund und Gefährte"],
        ["Am         G","tvam eva vidyā draviṇaṃ tvam eva","du allein Wissen und Reichtum"],
        ["F        E","tvam eva sarvaṃ mama deva deva","du allein alles, mein Gott der Götter"]
      ])
    )
  });
  add({
    id:"guruji-gayatri",
    titel:"Gāyatrī Mantra of Paramahamsa Vishwananda",
    autor:"Bhakti Marga Heft V6",
    quelle:"BhaktiMargaPrayers & Playing Harmonium, Bhakta Das",
    hinweis:"Heft: C  Bbm  /  C  /  Bbm C. Dreimal.",
    zeilen: v(1, [
      ["C                                 Bbm","oṃ premāvatārāya vidmahe","Wir erkennen den Avatāra der Liebe"],
      ["C","sadgurudevāya dhīmahi","wir sinnen auf den Satguru"],
      ["Bbm   C","tanno vishwananda pracodayāt","möge Vishwananda uns erleuchten"]
    ])
  });
  add({
    id:"ganesha-mantra",
    titel:"Gaṇeśa Mantra",
    autor:"Bhakti Marga Heft V6",
    quelle:"BhaktiMargaPrayers & Playing Harmonium, Bhakta Das",
    hinweis:"Heft: C G / C / G / G C.",
    zeilen: v(1, [
      ["C            G","oṃ vakratuṇḍa mahākāya","O gekrümmter Rüssel, großer Leib"],
      ["C","sūryakoti samaprabhā","Glanz wie Millionen Sonnen"],
      ["G","nirvighnaṃ kurume deva","nimm, Deva, jedes Hindernis"],
      ["G          C","sarva-kāryeṣu sarvadā","in allen Werken, immer"]
    ])
  });
  add({
    id:"gayatri",
    titel:"Gāyatrī Mantra",
    autor:"Bhakti Marga Heft V6",
    quelle:"BhaktiMargaPrayers & Playing Harmonium, Bhakta Das",
    hinweis:"Heft: C / Bb / C / Bb C. Dreimal.",
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
    autor:"Bhakti Marga Heft V6",
    quelle:"BhaktiMargaPrayers & Playing Harmonium, Bhakta Das",
    hinweis:"Heft beginnt in C G F. Refrain wie Om Jaya Jagadīśa Hare.",
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
    autor:"Bhakti Marga Heft V6",
    quelle:"BhaktiMargaPrayers & Playing Harmonium, Bhakta Das",
    hinweis:"Heft: C G F wie Viṣṇu-Āratī.",
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
    autor:"Bhakti Marga Heft V6",
    quelle:"BhaktiMargaPrayers & Playing Harmonium, Bhakta Das",
    hinweis:"Schlussgebete. Heft: C F G / Am G C.",
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
    s.quelle="Bhakti Marga Heft V6 · Śrī Kṛṣṇa Suprabhātam";
    s.hinweis="Heft: D C / D C / D C / D G D.";
    if(s.zeilen && s.zeilen[0]){
      s.zeilen[0].ch="D                         C";
    }
  }
})();

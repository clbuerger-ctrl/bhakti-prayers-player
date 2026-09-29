/* [Grok.com] The Govinda Prayer — Brahma-samhita, Heft mit Akkorden */
(function(){
  if(PRAYERS.some(function(p){ return p.id==="govinda"; })) return;
  var Rch = "D     G     D     C     D";
  var Rsa = "govindam ādi-puruṣaṃ tam ahaṃ bhajāmi";
  function v(n, ch, sa, ue, en){
    return { nr:n, ch:ch, sa:sa, ue:ue, en:en };
  }
  PRAYERS.splice(1, 0, {
    id: "govinda",
    titel: "The Govinda Prayer",
    autor: "Brahma-saṃhitā · Bhakti Marga Morning Prayers",
    youtube: "GkXhWNEKBRA",
    quelle: "THE_GOVINDA_PRAYER_withChords · Heft S. 10",
    hinweis: "Aus der Brahma-saṃhitā. Akkorde D D7 G, Refrain D G D / C D.",
    hinweisDe: "Aus der Brahma-saṃhitā. Akkorde D D7 G, Refrain D G D / C D.",
    hinweisEn: "From the Brahma-samhita. Chords D D7 G, refrain D G D / C D.",
    zeilen: [
      v("1a","D", "īśvaraḥ paramaḥ kṛṣṇaḥ", "Krishna ist der höchste Herr.", "Krishna is the Supreme Lord."),
      v("1b","D7+", "sac-cid-ānanda-vigrahaḥ", "Seine Gestalt ist Sein, Bewusstsein, Glück.", "His form is being, consciousness and bliss."),
      v("1c","D7", "anādir ādir govindaḥ", "Ohne Anfang, der Ursprung, Govinda.", "Without beginning, the origin, Govinda."),
      v("1d","G     D", "sarva-kāraṇa-kāraṇam", "Die Ursache aller Ursachen.", "The cause of all causes."),
      v("Refrain", Rch, Rsa, "Govinda, den ersten Purusha, verehre ich.", "I worship Govinda, the original Person."),
      v("2", "D    D7+    D7    G", "cintāmaṇi-prakara-sadmasu kalpa-vṛkṣa-lakṣāvṛteṣu surabhīr abhipālayantam | lakṣmī-sahasra-śata-sambhrama-sevyamānam", "In Wohnungen aus Wunschjuwelen hütet er die Surabhi-Kühe, von Lakshmis verehrt.", "In abodes of wish-jewels he tends the Surabhi cows, served by Lakshmis."),
      v("Refrain", Rch, Rsa, "Govinda, den ersten Purusha, verehre ich.", "I worship Govinda, the original Person."),
      v("3", "D    D7+    D7    G", "veṇuṃ kvaṇantam aravinda-dalāyatākṣaṃ barhāvataṃsam asitāmbuda-sundarāṅgam | kandarpa-koṭi-kamanīya-viśeṣa-śobham", "Flöte spielend, Lotosaugen, Pfauenfeder, wolkenschön.", "Playing the flute, lotus eyes, peacock feather, cloud-dark beauty."),
      v("Refrain", Rch, Rsa, "Govinda, den ersten Purusha, verehre ich.", "I worship Govinda, the original Person."),
      v("4", "D    D7+    D7    G", "ālola-candraka-lasad-vanamālya-vaṃśī-ratnāṅgadaṃ praṇaya-keli-kalā-vilāsam | śyāmaṃ tri-bhaṅga-lalitaṃ niyata-prakāśam", "Girlande, Flöte, dreifach gebeugt, ewig offenbar.", "Garland, flute, threefold bend, eternally manifest."),
      v("Refrain", Rch, Rsa, "Govinda, den ersten Purusha, verehre ich.", "I worship Govinda, the original Person."),
      v("5", "D    D7+    D7    G", "aṅgāni yasya sakalendriya-vṛttimanti paśyanti pānti kalayanti ciraṃ jaganti | ānanda-cinmaya-sad-ujjvala-vigrahasya", "Jedes Glied sieht, hütet, offenbart die Welten. Gestalt aus Licht und Glück.", "Each limb sees, guards and manifests the worlds. A form of light and bliss."),
      v("Refrain", Rch, Rsa, "Govinda, den ersten Purusha, verehre ich.", "I worship Govinda, the original Person."),
      v("6", "D    D7+    D7    G", "advaitam acyutam anādim ananta-rūpam ādyaṃ purāṇa-puruṣaṃ nava-yauvanaṃ ca | vedeṣu durlabham adurlabham ātma-bhaktau", "Nicht-zwei, unfallen, anfangslos, immer jung. Den Veden schwer, der Bhakti nah.", "Non-dual, unfallen, beginningless, ever young. Rare in the Vedas, near to devotion."),
      v("Refrain", Rch, Rsa, "Govinda, den ersten Purusha, verehre ich.", "I worship Govinda, the original Person."),
      v("7", "D    D7+    D7    G", "premāñjana-cchurita-bhakti-vilocanena santaḥ sadaiva hṛdayeṣu vilokayanti | yaṃ śyāmasundaram acintya-guṇa-svarūpam", "Mit dem Salbe der Liebe sehen die Heiligen ihn stets im Herzen: Shyamasundara.", "With the salve of love the saints always see him in the heart: Shyamasundara."),
      v("Refrain", Rch, Rsa, "Govinda, den ersten Purusha, verehre ich.", "I worship Govinda, the original Person."),
      v("8", "D    D7+    D7    G", "rāmādi-mūrtiṣu kalā-niyamena tiṣṭhan nānāvatāram akarod bhuvaneṣu kintu | kṛṣṇaḥ svayaṃ samabhavat paramaḥ pumān yaḥ", "In Rama und anderen als Teil — Krishna selbst ist die höchste Person.", "In Rama and others as a portion — Krishna himself is the Supreme Person."),
      v("Refrain", Rch, Rsa, "Govinda, den ersten Purusha, verehre ich.", "I worship Govinda, the original Person."),
      v("9", "D    D7+    D7    G", "goloka-nāmni nija-dhāmni tale ca tasya devī-maheśa-hari-dhāmasu teṣu teṣu | te te prabhāva-nicayā vihitāś ca yena", "Unter Goloka liegen die Wohnsitze von Devi, Shiva und Hari — durch ihn.", "Beneath Goloka lie the abodes of Devi, Shiva and Hari — by him."),
      v("Refrain", Rch, Rsa, "Govinda, den ersten Purusha, verehre ich.", "I worship Govinda, the original Person."),
      v("10", "D    D7+    D7    G", "sṛṣṭi-sthiti-pralaya-sādhana-śaktir ekā chāyeva yasya bhuvanāni bibharti durgā | icchānurūpam api yasya ca ceṣṭate sā", "Durga trägt die Welten wie ein Schatten seines Willens.", "Durga bears the worlds like a shadow of his will."),
      v("Refrain", Rch, Rsa, "Govinda, den ersten Purusha, verehre ich.", "I worship Govinda, the original Person."),
      v("Schluss a","D", "īśvaraḥ paramaḥ kṛṣṇaḥ", "Krishna ist der höchste Herr.", "Krishna is the Supreme Lord."),
      v("Schluss b","D7+", "sac-cid-ānanda-vigrahaḥ", "Seine Gestalt ist Sein, Bewusstsein, Glück.", "His form is being, consciousness and bliss."),
      v("Schluss c","D7", "anādir ādir govindaḥ", "Ohne Anfang, der Ursprung, Govinda.", "Without beginning, the origin, Govinda."),
      v("Schluss d","G     D", "sarva-kāraṇa-kāraṇam", "Die Ursache aller Ursachen.", "The cause of all causes."),
      v("Refrain", Rch, Rsa, "Govinda, den ersten Purusha, verehre ich.", "I worship Govinda, the original Person.")
    ]
  });
})();

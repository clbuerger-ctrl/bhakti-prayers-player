/* [Grok.com] Paramahamsa Sri Swami Vishwananda Ashtottaram, Heft Seiten 14-17, 108 Namen. */
(function(){
  if(typeof PRAYERS==="undefined") return;
  var zeilen=[
    {nr:1, ch:"", sa:'oṁ mahāvatāra śiṣyāya namaḥ', ue:'Verehrung dem, der Schüler Mahāvatār Bābājīs ist', en:"Salutations to He who is Mahavatar Babaji's disciple"},
    {nr:2, ch:"", sa:'oṁ viṣamāya namaḥ', ue:'Verehrung dem, der ohne gleichen ist', en:'Salutations to He who is unequalled'},
    {nr:3, ch:"", sa:'oṁ devakārya samudyatāya namaḥ', ue:'Verehrung dem, der zu einem göttlichen Werk geboren ist', en:'Salutations to He who has been born for a Divine purpose'},
    {nr:4, ch:"", sa:'oṁ sūkṣma tanave namaḥ', ue:'Verehrung dem, der einen feinen, mystischen Leib hat', en:'Salutations to He who has a mystical form'},
    {nr:5, ch:"", sa:'oṁ cinmayāya namaḥ', ue:'Verehrung dem, der reines Bewusstsein ist', en:'Salutations to He who is pure awareness'},
    {nr:6, ch:"", sa:'oṁ guru mūrtaye namaḥ', ue:'Verehrung dem, der Gestalt des göttlichen Lehrers ist', en:'Salutations to He who is a Divine teacher'},
    {nr:7, ch:"", sa:'oṁ sundarāya namaḥ', ue:'Verehrung dem Schönen', en:'Salutations to He who is delightful'},
    {nr:8, ch:"", sa:'oṁ sulocanāya namaḥ', ue:'Verehrung dem, dessen Augen vom Licht funkeln', en:'Salutations to He whose eyes sparkle with the light'},
    {nr:9, ch:"", sa:'oṁ sumukhāya namaḥ', ue:'Verehrung dem, der ein schönes Antlitz und ruhige Fassung hat', en:'Salutations to He who has a beautiful face and calm repose'},
    {nr:10, ch:"", sa:'oṁ cāru hāsāya namaḥ', ue:'Verehrung dem, der ein strahlendes Lächeln hat', en:'Salutations to He who has a radiant smile'},
    {nr:11, ch:"", sa:'oṁ keśavāya namaḥ', ue:'Verehrung dem, der schönes Haar hat', en:'Salutations to He who has beautiful hair'},
    {nr:12, ch:"", sa:'oṁ padmāmbhujāya namaḥ', ue:'Verehrung dem, der Lotosfüße hat', en:'Salutations to He who has lotus-like feet'},
    {nr:13, ch:"", sa:'oṁ manda gamanāya namaḥ', ue:'Verehrung dem, der anmutig geht', en:'Salutations to He who walks gracefully'},
    {nr:14, ch:"", sa:'oṁ cārumbara dhārine namaḥ', ue:'Verehrung dem, der herrlich gekleidet ist', en:'Salutations to He who is splendidly attired'},
    {nr:15, ch:"", sa:'oṁ rāmāya namaḥ', ue:'Verehrung dem, der gewinnenden Zauber hat', en:'Salutations to He who has compelling charm'},
    {nr:16, ch:"", sa:'oṁ mandira sthāpakāya namaḥ', ue:'Verehrung dem, der Tempel gegründet hat', en:'Salutations to He who has established temples'},
    {nr:17, ch:"", sa:'oṁ śirḍi bābārcakāya namaḥ', ue:'Verehrung dem, der Śirḍī Sāī Bābā verehrt', en:'Salutations to He who venerates Shirdi Sai Baba'},
    {nr:18, ch:"", sa:'oṁ gāyatrī yajvane namaḥ', ue:'Verehrung dem, der die Gāyatrī-Yajña hingebungsvoll vollzieht', en:'Salutations to He who devotedly performs the Gayatri yagna'},
    {nr:19, ch:"", sa:'oṁ arpaṇa svīkārakāya namaḥ', ue:'Verehrung dem, der die Karmas annimmt', en:'Salutations to He who assumes the karmas'},
    {nr:20, ch:"", sa:'oṁ viṣṇu pūjakāya namaḥ', ue:'Verehrung dem, der Viṣṇu verehrt', en:'Salutations to He who worships Lord Vishnu'},
    {nr:21, ch:"", sa:'oṁ namo nārāyaṇāyeti mantropāsakāya namaḥ', ue:'Verehrung dem, der das Mantra Om Namo Nārāyaṇāya hingebungsvoll spricht', en:'Salutations to He who devotedly recites the Om Namo Narayanaya mantra'},
    {nr:22, ch:"", sa:'oṁ svaramayāya namaḥ', ue:'Verehrung dem, der im heiligen Klang aufgeht', en:'Salutations to He who revels in chanting sacred sounds'},
    {nr:23, ch:"", sa:'oṁ madhura kaṇṭhāya namaḥ', ue:'Verehrung dem, der eine liebliche Stimme hat', en:'Salutations to He who has a melodious voice'},
    {nr:24, ch:"", sa:'oṁ kṛṣṇa saṁkīrtana lolupāya namaḥ', ue:'Verehrung dem, der in Kṛṣṇas liebendem Gesang versunken ist', en:'Salutations to He who is absorbed in the loving chants of Lord Krishna'},
    {nr:25, ch:"", sa:'oṁ stotra priyāya namaḥ', ue:'Verehrung dem, der göttliche Lobgesänge liebt', en:'Salutations to He who loves Divine hymns of praise'},
    {nr:26, ch:"", sa:'oṁ mita bhāṣine namaḥ', ue:'Verehrung dem, der von wenig Worten ist', en:'Salutations to He who is a man of few words'},
    {nr:27, ch:"", sa:'oṁ vāgmine namaḥ', ue:'Verehrung dem Beredten', en:'Salutations to He who is eloquent'},
    {nr:28, ch:"", sa:'oṁ citrakalā viśāradāya namaḥ', ue:'Verehrung dem, der in der Malkunst erfahren ist', en:'Salutations to He who excels in the art of painting'},
    {nr:29, ch:"", sa:'oṁ vrata dhārāya namaḥ', ue:'Verehrung dem, der sein Wort treu hält', en:'Salutations to He who keeps his word faithfully'},
    {nr:30, ch:"", sa:'oṁ sādhave namaḥ', ue:'Verehrung dem, der rechtschaffen lebt', en:'Salutations to He who lives righteously'},
    {nr:31, ch:"", sa:'oṁ jagat pānthāya namaḥ', ue:'Verehrung dem, der weit reist, um seine Verehrer zu treffen', en:'Salutations to He who travels extensively to meet His devotees'},
    {nr:32, ch:"", sa:'oṁ sarva loka hitāya namaḥ', ue:'Verehrung dem, der allen Welten wohlwill', en:'Salutations to He who is benevolent'},
    {nr:33, ch:"", sa:'oṁ bhakta priyāya namaḥ', ue:'Verehrung dem, den die Verehrer lieben', en:'Salutations to He whom the devotees adore'},
    {nr:34, ch:"", sa:'oṁ suhṛdāya namaḥ', ue:'Verehrung dem wahren Freund', en:'Salutations to He who is a true friend'},
    {nr:35, ch:"", sa:'oṁ anukūlāya namaḥ', ue:'Verehrung dem, der seinen Verehrern wohlgesinnt ist', en:'Salutations to He who is the well-wisher of His devotees'},
    {nr:36, ch:"", sa:'oṁ neyāya namaḥ', ue:'Verehrung dem, der Suchende zur Wirklichkeit führt', en:'Salutations to He who is a guide who leads seekers to reality'},
    {nr:37, ch:"", sa:'oṁ sudarśanāya namaḥ', ue:'Verehrung dem, der leicht zu erreichen ist', en:'Salutations to He who is easily approachable'},
    {nr:38, ch:"", sa:'oṁ bhakta vatsalāya namaḥ', ue:'Verehrung dem, der seinen Verehrern gütig ist', en:'Salutations to He who is compassionate to His devotees'},
    {nr:39, ch:"", sa:'oṁ prema mūrtaye namaḥ', ue:'Verehrung dem, der die Gestalt der Liebe ist', en:'Salutations to He who is Love personified'},
    {nr:40, ch:"", sa:'oṁ śubhekṣaṇāya namaḥ', ue:'Verehrung dem, dessen Blick im Verehrer einen Strom der Liebe weckt', en:'Salutations to He whose gaze evokes a stream of Love in the devotee'},
    {nr:41, ch:"", sa:'oṁ prīti vardhanāya namaḥ', ue:'Verehrung dem, der die Liebe im Herzen des Verehrers mehrt', en:'Salutations to He who increases love in the devotees heart'},
    {nr:42, ch:"", sa:'oṁ svasti dāyakāya namaḥ', ue:'Verehrung dem, der aufrichtigen Verehrern Heil schenkt', en:'Salutations to He who bestows auspiciousness on sincere devotees'},
    {nr:43, ch:"", sa:'oṁ tārakāya namaḥ', ue:'Verehrung dem, der die Verehrer über den Ozean des Saṁsāra führt', en:'Salutations to He who helps devotees cross the ocean of samsara'},
    {nr:44, ch:"", sa:'oṁ anugrahāya namaḥ', ue:'Verehrung dem, der Gnade auf seine Verehrer regnen lässt', en:'Salutations to He who showers Grace on His devotees'},
    {nr:45, ch:"", sa:'oṁ vardhanāya namaḥ', ue:'Verehrung dem, der seine Verehrer nährt', en:'Salutations to He who nourishes His devotees'},
    {nr:46, ch:"", sa:'oṁ arcitāya namaḥ', ue:'Verehrung dem Verehrungswürdigen', en:'Salutations to He who is worshipful'},
    {nr:47, ch:"", sa:'oṁ arthāya namaḥ', ue:'Verehrung dem, den die Verehrer anbeten', en:'Salutations to He whom devotees worship'},
    {nr:48, ch:"", sa:'oṁ siddhi pradāya namaḥ', ue:'Verehrung dem, der Gelingen schenkt', en:'Salutations to He who grants success'},
    {nr:49, ch:"", sa:'oṁ janārdanāya namaḥ', ue:'Verehrung dem, der seine Verehrer mit Freude und Frieden segnet', en:'Salutations to He who blesses His devotees with joy and peace'},
    {nr:50, ch:"", sa:'oṁ manoharāya namaḥ', ue:'Verehrung dem, der die Verehrer anzieht und ihnen Liebe und Seligkeit schenkt', en:'Salutations to He who draws the attention of the devotees and grants them love and bliss'},
    {nr:51, ch:"", sa:'oṁ mahākṣāya namaḥ', ue:'Verehrung dem, der Gedanken und Gefühle im Herzen seiner Verehrer sieht', en:'Salutations to He who perceives the thoughts and feelings in the bosom of His devotees'},
    {nr:52, ch:"", sa:'oṁ siddheśvarāya namaḥ', ue:'Verehrung dem, der mit geistigen Kräften begabt ist', en:'Salutations to He who is endowed with spiritual powers'},
    {nr:53, ch:"", sa:'oṁ bhasma bhūṣitāya namaḥ', ue:'Verehrung dem, dessen Gestalt in weißer Asche rein erstrahlt', en:'Salutations to He whose form shines immaculately in white ashes'},
    {nr:54, ch:"", sa:'oṁ ātma liṅgāya namaḥ', ue:'Verehrung dem, dem das Liṅga das Selbst bedeutet', en:'Salutations to He to whom the linga represents Atman the Self'},
    {nr:55, ch:"", sa:'oṁ liṅgārcana protsāhakāya namaḥ', ue:'Verehrung dem, der die Liṅga-Verehrung Śivas ermutigt', en:'Salutations to He who encourages the worship of Lord Shiva in the form of the linga'},
    {nr:56, ch:"", sa:'oṁ siddhi sādhanāya namaḥ', ue:'Verehrung dem, der die geheime Kraft ist, die Suchende in der Übung ausharren lässt', en:'Salutations to He who is the secret force which enables the seekers to diligently continue their efforts in spiritual practice'},
    {nr:57, ch:"", sa:'oṁ mādhavāya namaḥ', ue:'Verehrung dem, der den Suchenden in der Meditation hilft', en:'Salutations to He who helps the seeker in meditation'},
    {nr:58, ch:"", sa:'oṁ oṁkāropāsakāya namaḥ', ue:'Verehrung dem, dessen Om-Gesang im Herzen des Verehrers nachklingt', en:"Salutations to He whose chanting of Om resonates through the devotee's heart"},
    {nr:59, ch:"", sa:'oṁ sūkṣmāya namaḥ', ue:'Verehrung dem höchst Feinen', en:'Salutations to He who is supremely subtle'},
    {nr:60, ch:"", sa:'oṁ viśokāya namaḥ', ue:'Verehrung dem, der ohne Kummer ist', en:'Salutations to He who is devoid of sorrow'},
    {nr:61, ch:"", sa:'oṁ sāttvikāya namaḥ', ue:'Verehrung dem, der voll Ruhe und Frieden ist', en:'Salutations to He who is full of tranquillity and peace'},
    {nr:62, ch:"", sa:'oṁ sama darśine namaḥ', ue:'Verehrung dem, der gleichen Blick hat', en:'Salutations to He who has equal vision'},
    {nr:63, ch:"", sa:'oṁ dakṣāya namaḥ', ue:'Verehrung dem Wachsamen', en:'Salutations to He who is alert attentive and vigilant'},
    {nr:64, ch:"", sa:'oṁ acintyāya namaḥ', ue:'Verehrung dem Unergründlichen', en:'Salutations to He who is unfathomable'},
    {nr:65, ch:"", sa:'oṁ nir-ahaṁkārāya namaḥ', ue:'Verehrung dem, der das Ich überstiegen hat', en:'Salutations to He who has transcended the ego'},
    {nr:66, ch:"", sa:'oṁ nir-mohāya namaḥ', ue:'Verehrung dem, der ohne Verblendung ist', en:'Salutations to He who is without delusion'},
    {nr:67, ch:"", sa:'oṁ avyagrāya namaḥ', ue:'Verehrung dem Unbeirrten', en:'Salutations to He who is undisturbed'},
    {nr:68, ch:"", sa:'oṁ jīta krodhāya namaḥ', ue:'Verehrung dem, der den Zorn besiegt hat', en:'Salutations to He who has conquered anger'},
    {nr:69, ch:"", sa:'oṁ vinaya śīlāya namaḥ', ue:'Verehrung dem, der höchste Demut zeigt', en:'Salutations to He who shows supreme humility'},
    {nr:70, ch:"", sa:'oṁ svavaśāya namaḥ', ue:'Verehrung dem, der Herr seiner Lage ist', en:'Salutations to He who is the master of His situation'},
    {nr:71, ch:"", sa:'oṁ kuśalāya namaḥ', ue:'Verehrung dem, der im Handeln geschickt ist', en:'Salutations to He who is skilled in action'},
    {nr:72, ch:"", sa:'oṁ kṣamāya namaḥ', ue:'Verehrung dem, der in allem, was er unternimmt, wirksam ist', en:'Salutations to He who is effective in all His undertakings'},
    {nr:73, ch:"", sa:'oṁ satya dharmāya namaḥ', ue:'Verehrung dem, der Güte, Nichtverletzung und Freigebigkeit übt', en:'Salutations to He who practices the true dharmas of kindness, non-injury and charity'},
    {nr:74, ch:"", sa:'oṁ nir-vikalpāya namaḥ', ue:'Verehrung dem, der frei von beunruhigenden Gedanken ist', en:'Salutations to He who is free from disturbing thoughts'},
    {nr:75, ch:"", sa:'oṁ viraktāya namaḥ', ue:'Verehrung dem, der ohne Anhaftung ist', en:'Salutations to He who is devoid of attachment'},
    {nr:76, ch:"", sa:'oṁ atīndrāya namaḥ', ue:'Verehrung dem, der den Geist überstiegen hat', en:'Salutations to He who has transcended the mind'},
    {nr:77, ch:"", sa:'oṁ satya sandhāya namaḥ', ue:'Verehrung dem, der ganz gesammelt ist', en:'Salutations to He who is fully integrated'},
    {nr:78, ch:"", sa:'oṁ pavitrāya namaḥ', ue:'Verehrung dem Reinen', en:'Salutations to He who is pure'},
    {nr:79, ch:"", sa:'oṁ madhura svabhāvāya namaḥ', ue:'Verehrung dem Liebenswürdigen', en:'Salutations to He who is affable'},
    {nr:80, ch:"", sa:'oṁ surānandāya namaḥ', ue:'Verehrung dem, der den Verehrern Freude bringt', en:'Salutations to He who brings happiness to devotees'},
    {nr:81, ch:"", sa:'oṁ nandanāya namaḥ', ue:'Verehrung dem, der frei von den Schranken weltlicher Genüsse ist', en:'Salutations to He who is free from the limitations of worldly pleasures'},
    {nr:82, ch:"", sa:'oṁ prasannātmane namaḥ', ue:'Verehrung dem, der die Gestalt der Seligkeit ist', en:'Salutations to He who is an embodiment of bliss'},
    {nr:83, ch:"", sa:'oṁ bhakta nidhaye namaḥ', ue:'Verehrung dem, der dem Verehrer ein Schatz ist, aus dem er immer Güte schöpfen kann', en:'Salutations to He who is a treasure house to a devotee who can always draw on His kindness'},
    {nr:84, ch:"", sa:'oṁ sākṣaye namaḥ', ue:'Verehrung dem Zeugen der Gegensatzpaare', en:'Salutations to He who witnesses pairs of opposites'},
    {nr:85, ch:"", sa:'oṁ samātmaye namaḥ', ue:'Verehrung dem, der in allen gleich und allen gleich ist', en:'Salutations to He who is equally in all and equal to all'},
    {nr:86, ch:"", sa:'oṁ sadā yogine namaḥ', ue:'Verehrung dem, der immer im Yoga ist, los vom Vergänglichen, eins mit dem Ewigen', en:'Salutations to He who is ever in yoga, detached from ephemeral and identifying with the eternal'},
    {nr:87, ch:"", sa:'oṁ haraye namaḥ', ue:'Verehrung dem, der falsche Werte und inneren Streit zerstört', en:'Salutations to He who destroys false values and inner conflicts'},
    {nr:88, ch:"", sa:'oṁ sutapāya namaḥ', ue:'Verehrung dem, dessen Tapas schöpferisches Denken und wunderbare Sinnenzucht schenkt', en:'Salutations to He whose tapas grants creative thinking and wonderful sense control'},
    {nr:89, ch:"", sa:'oṁ saumyāya namaḥ', ue:'Verehrung dem Milden', en:'Salutations to He who is calm'},
    {nr:90, ch:"", sa:'oṁ guhyāya namaḥ', ue:'Verehrung dem, der geheimnisvoll und tief ist', en:'Salutations to He who is both mysterious and profound'},
    {nr:91, ch:"", sa:'oṁ vimukta-ātmāya namaḥ', ue:'Verehrung dem, der frei ist von der Prägung durch Leib, Denken und Verstand', en:'Salutations to He who is free from conditioning of both body, mind and intellect'},
    {nr:92, ch:"", sa:'oṁ gabhīrāya namaḥ', ue:'Verehrung dem, dessen Weisheit und Kraft der Verstand nicht fasst', en:'Salutations to He whose wisdom and strength cannot be understood by the human intellect'},
    {nr:93, ch:"", sa:'oṁ guptāya namaḥ', ue:'Verehrung dem, den bloße Worte nicht leicht erfassen', en:'Salutations to He who cannot easily be understood through mere words'},
    {nr:94, ch:"", sa:'oṁ ātma rāmāya namaḥ', ue:'Verehrung dem, der sich im Selbst freut', en:'Salutations to He who rejoices in the Self'},
    {nr:95, ch:"", sa:'oṁ śrī nivāsāya namaḥ', ue:'Verehrung dem, der in geläuterten Herzen wohnt', en:'Salutations to He who abides in those with purified hearts'},
    {nr:96, ch:"", sa:'oṁ devāya namaḥ', ue:'Verehrung dem Strahlenden', en:'Salutations to He who is resplendent'},
    {nr:97, ch:"", sa:'oṁ dyutidharāya namaḥ', ue:'Verehrung dem, dessen Glanz von Schönheit und Kraft leuchtet', en:'Salutations to He whose glow of beauty and strength shines'},
    {nr:98, ch:"", sa:'oṁ dhanyāya namaḥ', ue:'Verehrung dem immer Zufriedenen', en:'Salutations to He who is ever content'},
    {nr:99, ch:"", sa:'oṁ gurave namaḥ', ue:'Verehrung dem göttlichen Lehrer, der das Dunkel der Unwissenheit vertreibt', en:'Salutations to He who is the Divine teacher who dispels the darkness of ignorance'},
    {nr:100, ch:"", sa:'oṁ durati kramāya namaḥ', ue:'Verehrung dem, dem man schwer ungehorsam ist', en:'Salutations to He who one finds it difficult to disobey'},
    {nr:101, ch:"", sa:'oṁ gahanāya namaḥ', ue:'Verehrung dem Unfassbaren', en:'Salutations to He who is inconceivable'},
    {nr:102, ch:"", sa:'oṁ bhagavate namaḥ', ue:'Verehrung dem, von dem göttliche Herrlichkeit ausgeht', en:'Salutations to He who emanates Divine glory'},
    {nr:103, ch:"", sa:'oṁ hari śaraṇa mārga darśakāya namaḥ', ue:'Verehrung dem, der den Weg der Hingabe zeigt', en:'Salutations to He who encourages the path of surrender'},
    {nr:104, ch:"", sa:'oṁ kūṭastha jāgartakāya namaḥ', ue:'Verehrung dem, der das göttliche Rad zwischen den Brauen weckt', en:'Salutations to He who awakens the Divine chakra located between the eyebrows'},
    {nr:105, ch:"", sa:'oṁ abhiprāyāya namaḥ', ue:'Verehrung dem, der alle Religionen umfängt', en:'Salutations to He who embraces all religions'},
    {nr:106, ch:"", sa:'oṁ sarvamata samatyāya namaḥ', ue:'Verehrung dem, der die Gleichheit aller Glauben lehrt', en:'Salutations to He who preaches equality of all faiths'},
    {nr:107, ch:"", sa:'oṁ kṣamaikatā bhāva vardhakāya namaḥ', ue:'Verehrung dem, der Geduld und Einheit pflegt', en:'Salutations to He who espouses patience and unity'},
    {nr:108, ch:"", sa:'oṁ premāvatāra śrī vishwananda svāmine namaḥ', ue:'Verehrung Śrī Svāmī Viśvānanda, der die Liebe selbst ist', en:'Salutations to Sri Swami Vishwananda who is Love incarnate'}
  ];
  var P=PRAYERS.find(function(p){ return p.id==="ashtotram"; });
  if(!P){
    P={id:"ashtotram", titel:"Paramahamsa Śrī Svāmī Vishwananda Aṣṭottaram", autor:"Sri Vitthal Dham · Heft S. 14–17", quelle:"Prathana with chords · Sri Vitthal Dham · S. 14–17", zeilen:zeilen};
    PRAYERS.push(P);
  } else if(!P.zeilen || P.zeilen.length!==108){
    P.zeilen=zeilen;
    P.titel=P.titel||"Paramahamsa Śrī Svāmī Vishwananda Aṣṭottaram";
  }
  P.audio=P.audio||"audio/ashtotram.mp3";
  P.preferFile=true;
  /* [Grok.com] Abend: dieselben 108 Namen, eigene Folge nach dem Abend-Guru-Stotram */
  var E=PRAYERS.find(function(p){ return p.id==="ashtotram-abend"; });
  if(!E){
    E=JSON.parse(JSON.stringify(P));
    E.id="ashtotram-abend";
    E.titel="Paramahamsa Śrī Svāmī Vishwananda Aṣṭottaram (Abend)";
    E.autor="Abendgebet · Sri Vitthal Dham · Heft S. 14–17";
    PRAYERS.push(E);
  }
  E.zeilen=P.zeilen;
  E.audio=P.audio;
  E.preferFile=true;
})();

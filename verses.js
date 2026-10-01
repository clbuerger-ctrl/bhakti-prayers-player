/* [Grok-Bot] V1.34: Strophen wie im Heft "Prathana with chords" (Sri Vitthal Dham, 05.04.2024), Seite 9 und 12.
   Zeilen einer Strophe tragen dieselbe Nummer (1a, 1b ...), damit sie als ein Vers zusammenstehen. */
(function(){
  function byId(id){ return PRAYERS.find(function(p){ return p.id===id; }); }
  function build(old, verses){
    var out=[], k=0;
    verses.forEach(function(v){
      v.lines.forEach(function(L, j){
        var o=(L.keep!=null)?old[L.keep]:null;
        out.push({ nr:v.n+String.fromCharCode(97+j), ch:L.ch!=null?L.ch:(o&&o.ch)||"", sa:L.sa, ue:(o&&o.ue)||"", en:(o&&o.en)||"" });
      });
    });
    return out;
  }
  function L(sa, ch, keep){ return { sa:sa, ch:ch, keep:keep }; }

  var s=byId("suprabhatam");
  if(s){
    var o=s.zeilen.slice();
    var R=" haraye tava suprabhātam";
    s.zeilen=build(o, [
      { n:"1", lines:[ L("śrī kṛṣṇa viṣṇu madhu sūdana kaiṭabhāre","D                              C",0), L("nārāyaṇācyuta tri-vikrama cakra-pāne","D                              C",1), L("daityādi sārja dhara śrī dhāra vāsudeva","D                              C",2), L("gopāla kṛṣṇa"+R,"D          G        D",3) ] },
      { n:"2", lines:[ L("śrī rukmiṇīśa bhava nāśa hare murāre"), L("rādheṣa gopeṣa surūpa brahmādi vandya"), L("śrī dvārakāśraya vaikuṇṭha pate bhuvanaika mūrte"), L("gopāla deva"+R) ] },
      { n:"3", lines:[ L("mīnākṛtekamaṭha-rūpa varāha mūrte"), L("trai-vikramāya guhane bṛḥ rāma rāma"), L("śrī rāmakṛṣṇa yadu nandana kalki rūpa"), L("gopāla kṛṣṇa"+R) ] },
      { n:"4", lines:[ L("govinda mādhava mukunda parāt pareśa"), L("dāmodarābja dhara nandaka dhāri śauri"), L("gogopa gopijana sambṛta dhīna bandho"), L("gopi janapriya"+R) ] },
      { n:"5", lines:[ L("kṣīrābdhiśāyin bhujagādhi patalpaśāyin"), L("sat bhakta hṛt sadhanaśāyin ramāṅgaśāyin"), L("śrī gopa bhāma mṛdu talpa sukādhīśāyin"), L("gogopa vallabha"+R) ] },
      { n:"6", lines:[ L("śrī kaśyapātri sukha nārada gautamādi"), L("brahmaṛṣi saṅgamani saṅgava bhāra teśauḥ"), L("tiṣṭanti deva tava darśana bhagya hetoḥ"), L("gopāla sekara"+R) ] },
      { n:"7", lines:[ L("mandhārajādhi tulasī dala mallikādyaiḥ"), L("mālyāni añjali pute samūdhā haranti"), L("tiṣṭanti tvat bhavata dhāra tale munīndraḥ"), L("rādhā manohara"+R) ] },
      { n:"8", lines:[ L("vedatrayam patati gautama kannaguhyāḥ"), L("gayanti sat guṇa gaṇau varadāsa vargāḥ"), L("sankīrtayanti tava nāma kadhāvi śeṣāḥ"), L("śrī nāradādi ṛṣayā tava suprabhātam") ] },
      { n:"9", lines:[ L("govardhano dharaṇa gopa kiśora gopa gopi"), L("janāmṛta suveṣa bhavābdi pota"), L("trilokya mohana sumaṅgala divya deha"), L("śrī rukmiṇīśa varadha tava suprabhātam") ] },
      { n:"10", lines:[ L("śrī vatsa cina śaraṇāgata pārijāta"), L("bhaktārti bhañjana kṛpākara dhīna-bhando"), L("dityānta gāyati janapriya divya rūpa"), L("śrī nanda gopa tanayā tava suprabhātam") ] },
      { n:"11", lines:[ L("padmākṣa padma-mukha padma-dharā prameya"), L("padmālayāsra hṛta-padma nivāsa śauri"), L("padmodbhavāti surasevita pāda-padma"), L("padmādhi nātha"+R) ] },
      { n:"12", lines:[ L("vṛndātale viharanāya mahendra vandyā"), L("kandarpa darpa hara tinya sudheśa rūpa"), L("candrā nanāya sidha candana lipna dehā"), L("govinda yādhava"+R) ] },
      { n:"13", lines:[ L("śrī nanda nandana yaśodā kumāra dhīrā"), L("maīyānga dhinada vicona supuṣpa hārā"), L("nīlam bhudhāḥ su śarīra ramā vihārā"), L("gopāla deva"+R) ] },
      { n:"14", lines:[ L("śrībhai śrījān bhavati satya suganti bhadrā"), L("śrī mitravinda divasaḥ prabhū putṛ kādhyaiḥ"), L("tiṣṭanti divya bhavame tava seva nārdham"), L("gopi mana priya"+R) ] },
      { n:"15", lines:[ L("śrī kṛṣṇa acyuta ananta mukunda śauri"), L("rādhā manohara janārdana cakrapāne"), L("nāmāni divya munai-yurna niśam vadanti"), L("brāhmi muhūrta samaye tava suprabhātam") ] },
      { n:"Schluss ", lines:[ L("śrī kṛṣṇa suprabhātam","D",4), L("ye pathanti aharniśam",""), L("bhūri kṛtān mahā pāpān","G",5), L("śrī kṛṣṇar-graha hetukam","D") ] }
    ]);
    /* [Grok-Bot] V1.36: Heft notiert Akkorde nur bei Strophe 1, alle Strophen 1–15 haben dieselbe Melodie, daher gleiche Akkorde */
    var first=s.zeilen.filter(function(z){ return /^1[a-d]$/.test(z.nr); }).map(function(z){ return z.ch; });
    s.zeilen.forEach(function(z){ var m=String(z.nr).match(/^(\d+)([a-d])$/); if(m && !z.ch) z.ch=first[m[2].charCodeAt(0)-97]||""; });
    if(!s.youtube){ s.youtube="VlqY4h-B6X8"; s.youtubeStart=0; } /* [Grok-Bot] V1.36: Bhakti Marga Music, damit etwas abspielt */
    s.hinweisDe="Strophen wie im Heft Prathana with chords, Seite 9. Übersetzung bisher nur für Strophe 1 und den Schluss.";
    s.hinweisEn="Stanzas as in the Prathana with chords booklet, page 9. Translation so far only for stanza 1 and the closing.";
  }

  /* [Grok-Bot] V1.36: Govinda Prayer vollständig wie im Heft (28 Strophen, Seite 10–11); bisher fehlten 18 Strophen */
  var g=byId("govinda");
  if(g){
    var NEU={"7": "panthās tu koṭi-śata-vatsara-sampragamyo | vāyor athāpi manaso muni-puṅgavānām | so ’py asti yat-prapada-sīmny avicintya-tattve", "8": "eko ’py asau racayituṃ jagad-aṇḍa-koṭiṃ | yac-chaktir asti jagad-aṇḍa-cayā yad-antaḥ | aṇḍāntara-stha-paramāṇu-cayāntara-stham", "9": "yad-bhāva-bhāvita-dhiyo manujās tathaiva | samprāpya rūpa-mahimāsana-yāna-bhūṣāḥ | sūktair yam eva nigama-prathitaiḥ stuvanti", "10": "ānanda-cinmaya-rasa-pratibhāvitābhis | tābhir ya eva nija-rūpatayā kalābhiḥ | goloka eva nivasaty akhilātma-bhūto", "13": "yasya prabhā prabhavato jagad-aṇḍa-koṭi- | koṭiṣv aśeṣa-vasudhādi-vibhūti-bhinnam | tad brahma niṣkalam anantam aśeṣa-bhūtaṃ", "14": "māyā hi yasya jagad-aṇḍa-śatāni sūte | traiguṇya-tad-viṣaya-veda-vitāyamānā | sattvāvalambi-para-sattvaṃ viśuddha-sattvaṃ", "15": "ānanda-cinmaya-rasātmatayā manaḥsu | yaḥ prāṇināṃ pratiphalan smaratām upetya | līlāyitena bhuvanāni jayaty ajasraṃ", "18": "kṣīraṃ yathā dadhi vikāra-viśeṣa-yogāt | sañjāyate na hi tataḥ pṛthag asti hetoḥ | yaḥ śambhutām api tathā samupaiti kāryād", "19": "dīpārcir eva hi daśāntaram abhyupetya | dīpāyate vivṛta-hetu-samāna-dharmā | yas tādṛg eva hi ca viṣṇutayā vibhāti", "20": "yaḥ kāraṇārṇava-jale bhajati sma yoga- | nidrām ananta-jagad-aṇḍa-sa-roma-kūpaḥ | ādhāra-śaktim avalambya parāṃ sva-mūrtiṃ", "21": "yasyaika-niśvasita-kālam athāvalambya | jīvanti loma-bilajā jagad-aṇḍa-nāthāḥ | viṣṇur mahān sa iha yasya kalā-viśeṣo", "22": "bhāsvān yathāśma-śakaleṣu nijeṣu tejaḥ | svīyaṃ kiyat prakaṭayaty api tadvad atra | brahmā ya eṣa jagad-aṇḍa-vidhāna-kartā", "23": "yat-pāda-pallava-yugaṃ vinidhāya kumbha- | dvandve praṇāma-samaye sa gaṇādhirājaḥ | vighnān vihantum alam asya jagat-trayasya", "24": "agnir mahī gaganam ambu marud diśaś ca | kālas tathātma-manasīti jagat-trayāṇi | yasmād bhavanti vibhavanti viśanti yaṃ ca", "25": "yac-cakṣur eṣa savitā sakala-grahāṇāṃ | rājā samasta-sura-mūrtir aśeṣa-tejāḥ | yasyājñayā bhramati sambhṛta-kāla-cakro", "26": "dharmo ’tha pāpa-nicayaḥ śrutayas tapāṃsi | brahmādi-kīṭa-patagāvadhayaś ca jīvāḥ | yad-datta-mātra-vibhava-prakaṭa-prabhāvā", "27": "yas tv indra-gopam athavendram aho sva-karma- | bandhānurūpa-phala-bhājanam ātanoti | karmāṇi nirdahati kintu ca bhakti-bhājāṃ", "28": "yaṃ krodha-kāma-sahaja-praṇayādi-bhīti- | vātsalya-moha-guru-gaurava-sevya-bhāvaiḥ | sañcintya tasya sadṛśīṃ tanum āpur ete"};
    var MAP={"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":11,"8":12,"9":16,"10":17};
    var old=g.zeilen, alt={}, pre=[], post=[], ref=null, cur=null;
    old.forEach(function(z){
      if(/^Refrain/.test(z.nr)){ if(!ref) ref=z; return; }
      var m=String(z.nr).match(/^(\d+)([a-d]?)$/);
      if(m && MAP[m[1]]!=null && m[1]!=="1"){ alt[MAP[m[1]]]=z; return; }
      if(/^1[a-d]$/.test(z.nr)) pre.push(z); else post.push(z);
    });
    var CH=(alt[2]&&alt[2].ch)||"D    D7+    D7    G";
    function R(){ return { nr:"Refrain", ch:ref.ch, sa:ref.sa, ue:ref.ue, en:ref.en }; }
    var out=pre.slice(); out.push(R());
    for(var k=2;k<=28;k++){
      var z=alt[k];
      if(z) out.push({ nr:String(k), ch:z.ch, sa:z.sa, ue:z.ue, en:z.en });
      else out.push({ nr:String(k), ch:CH, sa:NEU[String(k)], ue:"", en:"" });
      out.push(R());
    }
    post.forEach(function(z){ out.push(z); }); out.push(R());
    out.forEach(function(z){ z.sa=String(z.sa).replace(/ \| /g,"\n"); }); /* [Grok-Bot] V1.37: jede Verszeile eigene Zeile */
    var HEFT={"2": "cintāmaṇi-prakara-sadmasu kalpa-vṛkṣa-\nlakṣāvṛteṣu surabhīr abhipālayantam\nlakṣmī-sahasra-śata-sambhrama-sevyamānaṃ", "3": "veṇuṃ kvaṇantam aravinda-dalāyatākṣaṃ\nbarhāvataṃsam asitāmbuda-sundarāṅgam\nkandarpa-koṭi-kamanīya-viśeṣa-śobhaṃ", "4": "ālola-candraka-lasad-vanamālya-vaṃśī-\nratnāṅgadaṃ praṇaya-keli-kalā-vilāsam\nśyāmaṃ tri-bhaṅga-lalitaṃ niyata-prakāśaṃ", "5": "aṅgāni yasya sakalendriya-vṛttimanti\npaśyanti pānti kalayanti ciraṃ jaganti\nānanda-cinmaya-sad-ujjvala-vigrahasya", "6": "advaitam acyutam anādim ananta-rūpam\nādyaṃ purāṇa-puruṣaṃ nava-yauvanaṃ ca\nvedeṣu durlabham adurlabham ātma-bhaktau", "11": "premāñjana-cchurita-bhakti-vilocanena\nsantaḥ sadaiva hṛdayeṣu vilokayanti\nyaṃ śyāmasundaram acintya-guṇa-svarūpaṃ", "12": "rāmādi-mūrtiṣu kalā-niyamena tiṣṭhan\nnānāvatāram akarod bhuvaneṣu kintu\nkṛṣṇaḥ svayaṃ samabhavat paramaḥ pumān yo", "16": "goloka-nāmni nija-dhāmni tale ca tasya\ndevī-maheśa-hari-dhāmasu teṣu teṣu\nte te prabhāva-nicayā vihitāś ca yena", "17": "sṛṣṭi-sthiti-pralaya-sādhana-śaktir ekā\nchāyeva yasya bhuvanāni bibharti durgā\nicchānurūpam api yasya ca ceṣṭate sā"}; /* [Grok-Bot] V1.37: Zeilentrennung wie im Heft Seite 10 */
    out.forEach(function(z){ if(HEFT[z.nr]) z.sa=HEFT[z.nr]; });
    g.zeilen=out;
  }

  /* [Grok-Bot] V1.37: Mukunda Mala, Zeilen nach Versmaß getrennt (vorher teils zwei halbe Verszeilen vermischt) */
  var mu=byId("mukunda");
  if(mu){
    var MZ={"1": "śrī-vallabheti varadeti dayāpareti\nbhakta-priyeti bhava-luṇṭhana-kovideti |\nnātheti nāga-śayaneti jagan-nivāseti\nālāpanaṃ prati-dinaṃ kuru me mukunda ||", "3": "mukunda mūrdhnā praṇipatya yāce\nbhavantam ekāntam iyantam artham |\navismṛtis tvac-caraṇāravinde\nbhave bhave me ’stu bhavat-prasādāt ||", "4": "nāhaṃ vande tava caraṇayor dvandvam advandva-hetoḥ\nkumbhīpākaṃ gurum api hare narakaṃ nāpanetum |\nramyā-rāmā-mṛdu-tanu-latā-nandane nāpi rantuṃ\nbhave bhave hṛdaya-bhavane bhāvayeyaṃ bhavantam ||", "5": "nāsthā dharme na vasu-nicaye naiva kāmopabhoge\nyad yad bhāvyaṃ tad bhavatu bhagavan pūrva-karmānurūpam |\netat prārthyaṃ mama bahu mataṃ janma-janmāntare ’pi\ntvat-padāmbhoruha-yuga-gatā niścalā bhaktir astu ||", "6": "divi vā bhuvi vā mamāstu vāso\nnarake vā narakāntaka prakāmam |\navadhīrita-śāradāravindau\ncaraṇau te maraṇe ’pi cintayāmi ||", "7": "kṛṣṇa tvadīya-pada-paṅkaja-pañjarāntam\nadyaiva me viśatu mānasa-rāja-haṃsaḥ |\nprāṇa-prayāṇa-samaye kapha-vāta-pittaiḥ\nkaṇṭhāvarodhana-vidhau smaraṇaṃ kutas te ||", "8": "cintayāmi harim eva santataṃ\nmanda-manda-hasitānanāmbujam |\nnanda-gopa-tanayaṃ parāt paraṃ\nnāradādi-muni-vṛnda-vanditam ||", "9": "kara-caraṇa-saroje kāntiman-netra-mīne\nśrama-muṣi bhuja-vīci-vyākule ’gādha-mārge |\nhari-sarasi vigāhyāpīya tejo-jalāugham\nbhava-maru-parikhinnaḥ khedam adya tyajāmi ||"};
    /* [Grok-Bot] V1.38: Verse 10-40 wieder eingesetzt, Zeilen nach Versmass */
    var MZ2={"10":"sarasija-nayane sa-śaṅkha-cakre\nmurabhidi mā viramasva citta rantum |\nsukhataram aparaṃ na jātu jāne\nhari-caraṇa-smaraṇāmṛtena tulyam ||","11":"mābhīr manda-mano vicintya bahudhā yāmīś ciraṃ yātanāḥ\nnāmī naḥ prabhavanti pāpa-ripavaḥ svāmī nanu śrīdharaḥ |\nālasyam vyapanīya bhakti-sulabhaṃ dhyāyasva nārāyaṇaṃ\nlokasya vyasanāpanodana-karo dāsasya kiṃ na kṣamaḥ ||","12":"bhava-jaladhi-gatānāṃ dvandva-vātāhatānāṃ\nsuta-duhitṛ-kalatra-trāṇa-bhārārditānām |\nviṣama-viṣaya-toye majjatām aplavānāṃ\nbhavatu śaraṇam eko viṣṇu-poto narāṇām ||","13":"bhava-jaladhim agādhaṃ dustaraṃ nistareyaṃ\nkatham aham iti ceto mā sma gāḥ kataratvam |\nsarasija-dṛśi deve tāvakī bhaktir ekā\nnaraka-bhidi niṣaṇṇā tārayiṣyaty avaśyam ||","14":"tṛṣṇā-toye madana-pavanoddhūta-mohormi-māle\ndārāvarta-tanaya-sahaja-grāha-saṅghākule ca |\nsaṃsārākhye mahati jaladhau majjatāṃ nas tridhāman\npadāmbhoje varada bhavato bhakti-nāvaṃ prayaccha ||","15":"mā drākṣaṃ kṣīṇa-puṇyān kṣaṇam api bhavato bhakti-hīnān padābje\nmā śrauṣaṃ śravya-bandhaṃ tava caritam apaśyānyad-ākhyāna-jātam |\nmā smarṣaṃ mādhava tvām api bhuvana-pate cetasāpahnuvānān\nmā bhūvaṃ tvat-saparyā-vyatikara-rahito janma-janmāntare ’pi ||","16":"jihve kīrtaya keśavaṃ mura-ripuṃ ceto bhaja śrīdharaṃ\npāṇi-dvandva samarcayācyuta-kathāḥ śrotra-dvaya tvaṃ śṛṇu |\nkṛṣṇaṃ lokaya locana-dvaya harer gacchāṅghri-yugmālayaṃ\njighra ghrāṇa mukunda-pada-tulasīṃ mūrdhan namādhokṣajam ||","17":"he lokāḥ śṛṇuta prasūti-maraṇa-vyādheś cikitsām imāṃ\nyoga-jñāḥ samudāharanti munayo yāṃ yājñavalkyādayaḥ |\nantar-jyotir ameyam ekam amṛtaṃ kṛṣṇākhyaṃ āpīyatāṃ\ntat pītaṃ paramauṣadhaṃ vitanute nirvāṇam atyantikam ||","18":"he martyāḥ paramaṃ hitaṃ śṛṇuta vo vakṣyāmi saṅkṣepataḥ\nsaṃsārārṇavam āpad-ūrmi-bahulaṃ samyak praviśya sthitāḥ |\nnānā-jñānam apāsya cetasi namo nārāyaṇāyety amuṃ\nmantraṃ sa-praṇavaṃ praṇāma-sahitaṃ pravartayadhvaṃ muhuḥ ||","19":"pṛthvī-reṇur aṇuḥ payāṃsi kaṇikāḥ phalgoh sphuliṅgo laghus\ntejo niḥśvasanaṃ marut tanutaraṃ randhraṃ su-sūkṣmaṃ nabhaḥ |\nkṣudrā rudra-pitāmaha-prabhṛtayaḥ kīṭāḥ samastāḥ surāḥ\ndṛṣṭe yatra sa tāvako vijayate bhūmāvadhir mahimā ||","20":"baddhenāñjalinā natena śirasā gātraiḥ sa-romodgamaiḥ\nkaṇṭhena svara-gadgadena nayanenodgīrṇa-bāṣpāmbunā |\nnityaṃ tvac-caraṇāravinda-yugala-dhyānāmṛtāsvādinām\nasmākaṃ sarasīruhākṣa satataṃ sampadyatāṃ jīvitam ||","21":"he gopālaka he kṛpā-jalanidhe he sindhu-kanyā-pate\nhe kaṃsāntaka he gajendra-karuṇāpārīṇa he mādhava |\nhe rāmānuja he jagat-traya-guro he puṇḍarīkākṣa māṃ\nhe gopījana-nātha pālaya paraṃ jānāmi na tvāṃ vinā ||","22":"bhaktāpāya-bhujaṅga-gāruḍa-maṇis trailokya-rakṣā-maṇir\ngopī-locana-cātakāmbuda-maṇiḥ saundarya-mudrā-maṇiḥ |\nyaḥ kāntā-maṇi-rukmiṇī-ghana-kuca-dvandvaika-bhūṣā-maṇiḥ\nśreyo deva-śikhā-maṇir diśatu no gopāla-cūḍā-maṇiḥ ||","23":"śatru-cchedaika-mantraṃ sakalam upaniṣad-vākya-sampūjya-mantraṃ\nsaṃsārottara-mantraṃ samupacita-tamasaḥ saṅgha-niryāṇa-mantram |\nsarvaiśvaryaika-mantraṃ vyasana-bhujaṅga-sandasta-sāntrāṇa-mantraṃ\njihve śrī-kṛṣṇa-mantraṃ japa japa satataṃ janma-sāphalya-mantram ||","24":"vyāmoha-praśamauṣadhaṃ muni-mano-vṛtti-pravṛtty-auṣadhaṃ\ndaityendrārti-karauṣadhaṃ tri-bhuvane sañjīvanaikauṣadham |\nbhaktātyanta-hitauṣadhaṃ bhava-bhaya-pradhvaṃsanaikauṣadhaṃ\nśreyaḥ-prāpti-karauṣadhaṃ piba manaḥ śrī-kṛṣṇa-divyauṣadham ||","25":"āmnāyābhyasanāny araṇya-ruditaṃ veda-vratāny anv-ahaṃ\nmedaś-cheda-phalāni pūrta-vidhayaḥ sarve hutaṃ bhasmani |\ntīrthānām avagāhanāni ca gaja-snānaṃ vinā yat-pada-\ndvandvāmbhoruha-saṃsmṛtiṃ vijayate devaḥ sa nārāyaṇaḥ ||","26":"śrīman-nāma procyā nārāyaṇākhyaṃ\nke na prāpur vāñchitaṃ pāpino ’pi |\nhā naḥ pūrvaṃ vāk-pravṛttā na tasmin\ntena prāptaṃ garbha-vāsādi-duḥkham ||","27":"maj-janmanaḥ phalam idaṃ madhu-kaitabhāre\nmat-prārthanīya-mad-anugraha eṣa eva |\ntvad-bhṛtya-bhṛtya-paricāraka-bhṛtya-bhṛtya-\nbhṛtyasya bhṛtya iti māṃ smara loka-nātha ||","28":"nāthe naḥ puruṣottame tri-jagatām ekādhipe cetasā\nsevye svasya padasya dātari sure nārāyaṇe tiṣṭhati |\nyaṃ kāñcit puruṣādhamaṃ katipaya-grāmeśam alpārtha-daṃ\nsevayai mṛgayāmahe naram aho mūkā varākā vayam ||","29":"madana parihara sthitiṃ madīye\nmanasi mukunda-padāravinda-dhāmni |\nhara-nayana-kṛśānunā kṛśo ’si\nsmarasi na cakra-parākramaṃ murāreḥ ||","30":"tattvaṃ bruvāṇāni paraṃ parasmāt\nmadhu kṣarantīva satāṃ phalāni |\npravartaya prāñjalir asmi jihve\nnāmāni nārāyaṇa-gocarāṇi ||","31":"idaṃ śarīraṃ pariṇāma-peśalaṃ\npataty avaśyaṃ śata-sandhi-jarjaram |\nkim auṣadhaṃ pṛcchasi mūḍha durmate\nnirāmayaṃ kṛṣṇa-rasāyanaṃ piba ||","32":"dārāvarākāra-vara-sute tanūjo viriñciḥ\nstotā vedās tava sura-gaṇā bhṛtya-vargāḥ prasādaḥ |\nmuktir māyā jagad avikalaṃ tāvakī devakī te\nmātā mitraṃ bala-ripu-sutas tvayy ato ’nyan na jāne ||","33":"kṛṣṇo rakṣatu no jagat-traya-guruḥ kṛṣṇaṃ namasyāmy ahaṃ\nkṛṣṇenāmara-śatravo vinihatāḥ kṛṣṇāya tubhyaṃ namaḥ |\nkṛṣṇād eva samutthitaṃ jagad idaṃ kṛṣṇasya dāso ’smy ahaṃ\nkṛṣṇe tiṣṭhati sarvam etad akhilaṃ he kṛṣṇa rakṣasva mām ||","34":"tat tvaṃ prasīda bhagavan kuru mayy anāthe\nviṣṇo kṛpāṃ parama-kāruṇikaḥ khalu tvam |\nsaṃsāra-sāgara-nimagnaṃ ananta dīnam\nuddhartum arhasi hare puruṣottamo ’si ||","35":"namāmi nārāyaṇa-pada-paṅkajaṃ\nkaromi nārāyaṇa-pūjanaṃ sadā |\nvadāmi nārāyaṇa-nāma nirmalaṃ\nsmarāmi nārāyaṇa-tattvam avyayam ||","36":"śrī-nātha nārāyaṇa vāsudeva\nśrī-kṛṣṇa bhakta-priya cakra-pāṇe |\nśrī-padmanābhācyuta kaitabhāre\nśrī-rāma padmākṣa hare murāre ||","37":"ananta vaikuṇṭha mukunda kṛṣṇa\ngovinda dāmodara mādhaveti |\nvaktuṃ samartho ’pi na vakti kaścid\naho janānāṃ vyasanābhimukhyam ||","38":"dhyāyanti ye viṣṇum anantam avyayaṃ\nhṛt-padma-madhye satataṃ vyavasthitam |\nsamāhitānāṃ satatābhaya-pradaṃ\nte yānti siddhiṃ paramāṃ ca vaiṣṇavīm ||","39":"kṣīra-sāgara-taraṅga-śīkarā-\nsāra-tārakita-cāru-mūrtaye |\nbhogi-bhoga-śayanīya-śāyine\nmādhavāya madhu-vidviṣe namaḥ ||","40":"yasya priyau śruti-dharau kavi-loka-vīrau\nmitre dvija-varau padma-śarāv abhūtām |\ntenāmbujākṣa-caraṇāmbuja-ṣaṭ-padena\nrājñā kṛtā kṛtir iyaṃ kulaśekhareṇa ||"};
    for(var k in MZ2) MZ[k]=MZ2[k];
    mu.zeilen.forEach(function(z){ if(MZ[z.nr]) z.sa=MZ[z.nr]; });
  }

  var n=byId("narasimha");
  if(n){
    var q=n.zeilen.slice();
    n.zeilen=build(q, [
      { n:"1", lines:[ L("namaste nārasiṁhāya ://",null,0), L("prahlādāh-lāda dāyine ://",null,1), L("hiraṇyākaśipur vakṣaḥ ://",null,2), L("śilā taṅka nakhālāye ://",null,3) ] },
      { n:"2", lines:[ L("ito nṛsiṁho parato nṛsiṁho ://",null,4), L("yato yato yāmi tato nṛsiṁho ://",null,5), L("bahir nṛsiṁho hṛdaye nṛsiṁho ://",null,6), L("nṛsiṁham ādiṁ śaranam prapadye ://",null,7) ] },
      { n:"3", lines:[ L("tava kara kamala vare-e,",null,8), L("nakhām adbhuta śriṅgāṁ,",null,9), L("dalitā hiraṇyakaśipu,",null,10), L("tanu bhṛṅgam,",null,11) ] },
      { n:"4", lines:[ L("keśava dhṛta nara hari rūpa,",null,12), L("jaya jagadīśa hare-e,",null,13), L("jaya jagadīśa hare,",""), L("jaya jagadīśa hare ://",null,14) ] },
      { n:"5", lines:[ L("jaya nṛśiṅga dev,","Bb",15), L("nṛśiṅga dev,","F"), L("nṛśiṅga dev,","C"), L("nṛśiṅga dev ://","F") ] },
      { n:"6", lines:[ L("jaya prahlād mahārāj prahlād mahārāj,","Bb                F"), L("bhakta svarupa jaya prahlād mahārāj ://","C                    F") ] },
      { n:"7", lines:[ L("gurudev,","Bb"), L("gurudev,","F"), L("gurudev,","C"), L("jaya jaya gurudev ://","F") ] },
      { n:"8", lines:[ L("śrī vishwananda gurudev,","Bb"), L("gurudev,","F"), L("gurudev,","C"), L("śrī vishwananda gurudev ://","F") ] }
    ]);
    n.hinweisDe="Strophen wie im Heft Prathana with chords, Seite 12.";
    n.hinweisEn="Stanzas as in the Prathana with chords booklet, page 12.";
  }
})();

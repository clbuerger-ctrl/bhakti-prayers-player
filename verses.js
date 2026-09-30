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
    s.hinweisDe="Strophen wie im Heft Prathana with chords, Seite 9. Übersetzung bisher nur für Strophe 1 und den Schluss.";
    s.hinweisEn="Stanzas as in the Prathana with chords booklet, page 9. Translation so far only for stanza 1 and the closing.";
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

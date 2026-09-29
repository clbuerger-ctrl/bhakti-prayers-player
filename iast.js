/* [Grok.com] V1.5 IAST-Lyrics: lange Vokale und Punkte zum Mitsingen */
(function(){
  var m = PRAYERS.find(function(p){ return p.id==="mukunda"; });
  if(!m) return;
  var iast = [
    "ghuṣyate yasya nagare raṅga-yātrā dine-dine | tam ahaṃ śirasā vande rājānaṃ kulaśekharam ||",
    "śrī-vallabheti varadeti dayāpareti bhakta-priyeti bhava-luṇṭhana-kovideti | nātheti nāga-śayaneti jagan-nivāseti ālāpanaṃ prati-dinaṃ kuru me mukunda ||",
    "jayatu jayatu devo devakī-nandano ’yaṃ jayatu jayatu kṛṣṇo vṛṣṇi-vaṃśa-pradīpaḥ | jayatu jayatu megha-śyāmalaḥ komalāṅgo jayatu jayatu pṛthvī-bhāra-nāśo mukundaḥ ||",
    "mukunda mūrdhnā praṇipatya yāce bhavantam ekāntam iyantam artham | avismṛtis tvac-caraṇāravinde bhave bhave me ’stu bhavat-prasādāt ||",
    "nāhaṃ vande tava caraṇayor dvandvam advandva-hetoḥ kumbhīpākaṃ gurum api hare narakaṃ nāpanetum | ramyā-rāmā-mṛdu-tanu-latā-nandane nāpi rantuṃ bhave bhave hṛdaya-bhavane bhāvayeyaṃ bhavantam ||",
    "nāsthā dharme na vasu-nicaye naiva kāmopabhoge yad yad bhāvyaṃ tad bhavatu bhagavan pūrva-karmānurūpam | etat prārthyaṃ mama bahu mataṃ janma-janmāntare ’pi tvat-padāmbhoruha-yuga-gatā niścalā bhaktir astu ||",
    "divi vā bhuvi vā mamāstu vāso narake vā narakāntaka prakāmam | avadhīrita-śāradāravindau caraṇau te maraṇe ’pi cintayāmi ||",
    "kṛṣṇa tvadīya-pada-paṅkaja-pañjarāntam adyaiva me viśatu mānasa-rāja-haṃsaḥ | prāṇa-prayāṇa-samaye kapha-vāta-pittaiḥ kaṇṭhāvarodhana-vidhau smaraṇaṃ kutas te ||",
    "cintayāmi harim eva santataṃ manda-manda-hasitānanāmbujaṃ | nanda-gopa-tanayaṃ parāt paraṃ nāradādi-muni-vṛnda-vanditam ||",
    "kara-caraṇa-saroje kāntiman-netra-mīne śrama-muṣi bhuja-vīci-vyākule ’gādha-mārge | hari-sarasi vigāhyāpīya tejo-jalāughaṃ bhava-maru-parikhinnah khedam adya tyajāmi ||",
    "sarasija-nayane sa-śaṅkha-cakre murabhidi mā viramasva citta rantum | sukhataram aparaṃ na jātu jāne hari-caraṇa-smaraṇāmṛtena tulyam ||",
    "mābhīr manda-mano vicintya bahudhā yāmīś ciraṃ yātanāḥ nāmī naḥ prabhavanti pāpa-ripavaḥ svāmī nanu śrīdharaḥ | ālasyam vyapanīya bhakti-sulabhaṃ dhyāyasva nārāyaṇaṃ lokasya vyasanāpanodana-karo dāsasya kiṃ na kṣamaḥ ||",
    "bhava-jaladhi-gatānāṃ dvandva-vātāhatānāṃ suta-duhitṛ-kalatra-trāṇa-bhārārditānām | viṣama-viṣaya-toye majjatām aplavānāṃ bhavatu śaraṇam eko viṣṇu-poto narāṇām ||",
    "bhava-jaladhim agādhaṃ dustaraṃ nistareyaṃ katham aham iti ceto mā sma gāḥ kataratvam | sarasija-dṛśi deve tāvakī bhaktir ekā naraka-bhidi niṣaṇṇā tārayiṣyaty avaśyam ||",
    "tṛṣṇā-toye madana-pavanoddhūta-mohormi-māle dārāvarta-tanaya-sahaja-grāha-saṅghākule ca | saṃsārākhye mahati jaladhau majjatāṃ nas tridhāman padāmbhoje varada bhavato bhakti-nāvaṃ prayaccha ||",
    "mā drākṣaṃ kṣīṇa-puṇyān kṣaṇam api bhavato bhakti-hīnān padābje mā śrauṣaṃ śravya-bandhaṃ tava caritam apaśyānyad-ākhyāna-jātam | mā smarṣaṃ mādhava tvām api bhuvana-pate cetasāpahnuvānān mā bhūvaṃ tvat-saparyā-vyatikara-rahito janma-janmāntare ’pi ||",
    "jihve kīrtaya keśavaṃ mura-ripuṃ ceto bhaja śrīdharaṃ pāṇi-dvandva samarcayācyuta-kathāḥ śrotra-dvaya tvaṃ śṛṇu | kṛṣṇaṃ lokaya locana-dvaya harer gacchāṅghri-yugmālayaṃ jighra ghrāṇa mukunda-pada-tulasīṃ mūrdhan namādhokṣajam ||",
    "he lokāḥ śṛṇuta prasūti-maraṇa-vyādheś cikitsām imāṃ yoga-jñāḥ samudāharanti munayo yāṃ yājñavalkyādayaḥ | antar-jyotir ameyam ekam amṛtaṃ kṛṣṇākhyaṃ āpīyatāṃ tat pītaṃ paramauṣadhaṃ vitanute nirvāṇam atyantikam ||",
    "he martyāḥ paramaṃ hitaṃ śṛṇuta vo vakṣyāmi saṅkṣepataḥ saṃsārārṇavam āpad-ūrmi-bahulaṃ samyak praviśya sthitāḥ | nānā-jñānam apāsya cetasi namo nārāyaṇāyety amuṃ mantraṃ sa-praṇavaṃ praṇāma-sahitaṃ pravartayadhvaṃ muhuḥ ||",
    "pṛthvī-reṇur aṇuḥ payāṃsi kaṇikāḥ phalgoh sphuliṅgo laghus tejo niḥśvasanaṃ marut tanutaraṃ randhraṃ su-sūkṣmaṃ nabhaḥ | kṣudrā rudra-pitāmaha-prabhṛtayaḥ kīṭāḥ samastāḥ surāḥ dṛṣṭe yatra sa tāvako vijayate bhūmāvadhir mahimā ||",
    "baddhenāñjalinā natena śirasā gātraiḥ sa-romodgamaiḥ kaṇṭhena svara-gadgadena nayanenodgīrṇa-bāṣpāmbunā | nityaṃ tvac-caraṇāravinda-yugala-dhyānāmṛtāsvādinām asmākaṃ sarasīruhākṣa satataṃ sampadyatāṃ jīvitam ||",
    "he gopālaka he kṛpā-jalanidhe he sindhu-kanyā-pate he kaṃsāntaka he gajendra-karuṇāpārīṇa he mādhava | he rāmānuja he jagat-traya-guro he puṇḍarīkākṣa māṃ he gopījana-nātha pālaya paraṃ jānāmi na tvāṃ vinā ||",
    "bhaktāpāya-bhujaṅga-gāruḍa-maṇis trailokya-rakṣā-maṇir gopī-locana-cātakāmbuda-maṇiḥ saundarya-mudrā-maṇiḥ | yaḥ kāntā-maṇi-rukmiṇī-ghana-kuca-dvandvaika-bhūṣā-maṇiḥ śreyo deva-śikhā-maṇir diśatu no gopāla-cūḍā-maṇiḥ ||",
    "śatru-cchedaika-mantraṃ sakalam upaniṣad-vākya-sampūjya-mantraṃ saṃsārottara-mantraṃ samupacita-tamasaḥ saṅgha-niryāṇa-mantram | sarvaiśvaryaika-mantraṃ vyasana-bhujaṅga-sandasta-sāntrāṇa-mantraṃ jihve śrī-kṛṣṇa-mantraṃ japa japa satataṃ janma-sāphalya-mantram ||",
    "vyāmoha-praśamauṣadhaṃ muni-mano-vṛtti-pravṛtty-auṣadhaṃ daityendrārti-karauṣadhaṃ tri-bhuvane sañjīvanaikauṣadham | bhaktātyanta-hitauṣadhaṃ bhava-bhaya-pradhvaṃsanaikauṣadhaṃ śreyaḥ-prāpti-karauṣadhaṃ piba manaḥ śrī-kṛṣṇa-divyauṣadham ||",
    "āmnāyābhyasanāny araṇya-ruditaṃ veda-vratāny anv-ahaṃ medaś-cheda-phalāni pūrta-vidhayaḥ sarve hutaṃ bhasmani | tīrthānām avagāhanāni ca gaja-snānaṃ vinā yat-pada-dvandvāmbhoruha-saṃsmṛtiṃ vijayate devaḥ sa nārāyaṇaḥ ||",
    "śrīman-nāma procyā nārāyaṇākhyaṃ ke na prāpur vāñchitaṃ pāpino ’pi | hā naḥ pūrvaṃ vāk-pravṛttā na tasmin tena prāptaṃ garbha-vāsādi-duḥkham ||",
    "maj-janmanaḥ phalam idaṃ madhu-kaitabhāre mat-prārthanīya-mad-anugraha eṣa eva | tvad-bhṛtya-bhṛtya-paricāraka-bhṛtya-bhṛtya-bhṛtyasya bhṛtya iti māṃ smara loka-nātha ||",
    "nāthe naḥ puruṣottame tri-jagatām ekādhipe cetasā sevye svasya padasya dātari sure nārāyaṇe tiṣṭhati | yaṃ kāñcit puruṣādhamaṃ katipaya-grāmeśam alpārtha-daṃ sevayai mṛgayāmahe naram aho mūkā varākā vayam ||",
    "madana parihara sthitiṃ madīye manasi mukunda-padāravinda-dhāmni | hara-nayana-kṛśānunā kṛśo ’si smarasi na cakra-parākramaṃ murāreḥ ||",
    "tattvaṃ bruvāṇāni paraṃ parasmāt madhu kṣarantīva satāṃ phalāni | pravartaya prāñjalir asmi jihve nāmāni nārāyaṇa-gocarāṇi ||",
    "idaṃ śarīraṃ pariṇāma-peśalaṃ pataty avaśyaṃ śata-sandhi-jarjaram | kim auṣadhaṃ pṛcchasi mūḍha durmate nirāmayaṃ kṛṣṇa-rasāyanaṃ piba ||",
    "dārāvarākāra-vara-sute tanūjo viriñciḥ stotā vedās tava sura-gaṇā bhṛtya-vargāḥ prasādaḥ | muktir māyā jagad avikalaṃ tāvakī devakī te mātā mitraṃ bala-ripu-sutas tvayy ato ’nyan na jāne ||",
    "kṛṣṇo rakṣatu no jagat-traya-guruḥ kṛṣṇaṃ namasyāmy ahaṃ kṛṣṇenāmara-śatravo vinihatāḥ kṛṣṇāya tubhyaṃ namaḥ | kṛṣṇād eva samutthitaṃ jagad idaṃ kṛṣṇasya dāso ’smy ahaṃ kṛṣṇe tiṣṭhati sarvam etad akhilaṃ he kṛṣṇa rakṣasva mām ||",
    "tat tvaṃ prasīda bhagavan kuru mayy anāthe viṣṇo kṛpāṃ parama-kāruṇikaḥ khalu tvam | saṃsāra-sāgara-nimagnaṃ ananta dīnam uddhartum arhasi hare puruṣottamo ’si ||",
    "namāmi nārāyaṇa-pada-paṅkajaṃ karomi nārāyaṇa-pūjanaṃ sadā | vadāmi nārāyaṇa-nāma nirmalaṃ smarāmi nārāyaṇa-tattvam avyayam ||",
    "śrī-nātha nārāyaṇa vāsudeva śrī-kṛṣṇa bhakta-priya cakra-pāṇe | śrī-padmanābhācyuta kaitabhāre śrī-rāma padmākṣa hare murāre ||",
    "ananta vaikuṇṭha mukunda kṛṣṇa govinda dāmodara mādhaveti | vaktuṃ samartho ’pi na vakti kaścid aho janānāṃ vyasanābhimukhyam ||",
    "dhyāyanti ye viṣṇum anantam avyayaṃ hṛt-padma-madhye satataṃ vyavasthitam | samāhitānāṃ satatābhaya-pradaṃ te yānti siddhiṃ paramāṃ ca vaiṣṇavīm ||",
    "kṣīra-sāgara-taraṅga-śīkarā-sāra-tārakita-cāru-mūrtaye | bhogi-bhoga-śayanīya-śāyine mādhavāya madhu-vidviṣe namaḥ ||",
    "yasya priyau śruti-dharau kavi-loka-vīrau mitre dvija-varau padma-śarāv abhūtām | tenāmbujākṣa-caraṇāmbuja-ṣaṭ-padena rājñā kṛtā kṛtir iyaṃ kulaśekhareṇa ||"
  ];
  m.zeilen.forEach(function(z, n){
    if(iast[n]) z.sa = iast[n];
  });
})();

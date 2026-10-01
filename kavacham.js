/* [Grok.com] Vollstaendiges Shri Nrisimha Kavacham, 30 Slokas vierzeilig wie Heft. Am Ende das Nrsimha-Gebet von Heft Seite 12, vierzeilig, nicht nur im eigenen Eintrag. */
(function(){
  var k = PRAYERS.find(function(p){ return p.id==="kavacham"; });
  if(!k) return;
  var L = "Dm   Bb    C     Dm";
  function v(n, sa, ue, en){
    return { nr: String(n), ch: L, sa: sa, ue: ue, en: en };
  }
  k.quelle = "Prathana with chords · Sri Vitthal Dham · S. 20–21";
  k.hinweis = "Strophen vierzeilig wie im Musikerheft. Am Ende das Nrsimha-Gebet von Heft Seite 12.";
  k.hinweisDe = "Jede Strophe in vier Heft-Zeilen. Am Ende das Nrsimha-Gebet, Seite 12.";
  k.hinweisEn = "Each verse in four booklet lines. The Nrsimha prayer from page 12 follows at the end.";
  k.zeilen = [
    v(1, "nṛsiṃha-kavacaṃ vakṣye\nprahlādenoditaṃ purā\nsarva-rakṣākaraṃ puṇyaṃ\nsarvopadrava-nāśanam", "Ich spreche das Narasimha-Kavacham, einst von Prahlada gesagt. Es schützt ganz und löscht jedes Unglück.", "I recite the Narasimha Kavacham spoken by Prahlada."),
    v(2, "sarva-sampat-karaṃ caiva\nsvarga-mokṣa-pradāyakam\ndhyātvā nṛsiṃhaṃ deveśaṃ\nhema-siṃhāsana-sthitam", "Es bringt allen Wohlstand, Himmel und Befreiung.", "It gives prosperity, heaven and liberation."),
    v(3, "vivṛtāsyaṃ tri-nayanaṃ\nśarad-indu-sama-prabham\nlakṣmyāliṅgita-vāmāṅgaṃ\nvibhūtibhir upāśritam", "Offener Mund, drei Augen, Lakshmi an der linken Seite.", "Open mouth, three eyes, Lakshmi at his left."),
    v(4, "catur-bhujaṃ komalāṅgaṃ\nsvarṇa-kuṇḍala-śobhitam\nsaroja-śobhitoraskaṃ\nratna-keyūra-mudritam", "Vier Arme, goldene Ohrringe, Juwelen-Armreifen.", "Four arms, golden earrings, jewel armlets."),
    v(5, "tapta-kāñcana-saṅkāśaṃ\npīta-nirmala-vāsasam\nindrādi-sura-mauli-stha\nsphuran-māṇikya-dīptibhiḥ", "Wie geschmolzenes Gold, reines gelbes Gewand.", "Like molten gold, a spotless yellow cloth."),
    v(6, "virājita-pada-dvandvaṃ\nśaṅkha-cakrādi-hetibhiḥ\ngarutmatā savinayaṃ\nstūyamānaṃ mudānvitam", "Leuchtende Füße. Garuda preist ihn.", "Shining feet. Garuda praises him."),
    v(7, "sva-hṛt-kamala-saṃvāsaṃ\nkṛtvā tu kavacaṃ paṭhet\nnṛsiṃho me śiraḥ pātu\nloka-rakṣārtha-sambhavaḥ", "Ihn im Herzlotus wohnen lassen, dann das Kavacham lesen.", "Place him in the heart-lotus, then recite."),
    v(8, "sarvago 'pi stambha-vāsaḥ\nphālaṃ me rakṣatu dhvanim\nnṛsiṃho me dṛśau pātu\nsoma-sūryāgni-locanaḥ", "Der im Pfeiler wohnte schütze Stirn, Stimme und Augen.", "He who dwelt in the pillar protect brow, voice and eyes."),
    v(9, "smṛtiṃ me pātu nṛhariḥ\nmuni-varya-stuti-priyaḥ\nnāsāṃ me siṃha-nāsas tu\nmukhaṃ lakṣmī-mukha-priyaḥ", "Nrihari schütze Gedächtnis, Nase und Gesicht.", "May Nrihari protect memory, nose and face."),
    v(10, "sarva-vidyādhipaḥ pātu\nnṛsiṃho rasanāṃ mama\nvaktraṃ pātv indu-vadanaḥ\nsadā prahlāda-vanditaḥ", "Herr allen Wissens schütze Zunge und Mund.", "Lord of knowledge protect tongue and mouth."),
    v(11, "nṛsiṃhaḥ pātu me kaṇṭhaṃ\nskandhau bhū-bhṛd ananta\nkṛt divyāstra śobhita bhujaḥ\nnṛsiṃhaḥ pātu me bhujaḥ", "Nrisimha schütze Hals und Arme.", "May Nrisimha protect throat and arms."),
    v(12, "karau me deva-varado\nnṛsiṃhaḥ pātu sarvataḥ\nhṛdayaṃ yogi-sādhyaś ca\nnivāsaṃ pātu me hariḥ", "Der Wunschgewährer schütze Hände, Herz und Wohnsitz.", "The boon-giver protect hands, heart and dwelling."),
    v(13, "madhyaṃ pātu hiraṇyākṣa\nvakṣaḥ-kukṣi-vidāraṇaḥ\nnābhiṃ me pātu nṛhariḥ\nsva-nābhi-brahma-saṃstutaḥ", "Er schütze Mitte und Nabel.", "May he protect midriff and navel."),
    v(14, "brahmāṇḍa-koṭayaḥ kaṭyāṃ\nyasyāsau pātu me kaṭim\nguhyaṃ me pātu guhyānāṃ\nmantrāṇāṃ guhya-rūpa-dhṛk", "Er schütze Hüfte und das Verborgene.", "May he protect hips and what is hidden."),
    v(15, "ūrū manobhavaḥ pātu\njānunī nara-rūpa-dhṛk\njaṅghe pātu dharā-bhāra-hartā\nyo 'sau nṛ-kesarī", "Schenkel, Knie und Waden schütze der Menschenlöwe.", "Thighs, knees and calves — the man-lion."),
    v(16, "sura-rājya-pradaḥ pātu\npādau me nṛharīśvaraḥ\nsahasra-śīrṣā puruṣaḥ\npātu me sarvaśas tanum", "Füße und den ganzen Leib schütze er.", "May he protect feet and the whole body."),
    v(17, "mahograḥ pūrvataḥ pātu\nmahā-vīrāgrajo 'gnitaḥ\nmahā-viṣṇur dakṣiṇe tu\nmahā-jvālas tu nairṛtau", "Osten, Südosten, Süden, Südwesten.", "East, south-east, south, south-west."),
    v(18, "paścime pātu sarveśo\ndiśi me sarvato-mukhaḥ\nnṛsiṃhaḥ pātu vāyavyāṃ\nsaumyāṃ bhūṣaṇa-vigrahaḥ", "Westen, alle Seiten, Nordwest, Norden.", "West, all sides, northwest, north."),
    v(19, "īśānyāṃ pātu bhadro me\nsarva-maṅgala-dāyakaḥ\nsaṃsāra-bhayataḥ pātu\nmṛtyor mṛtyur nṛ-kesarī", "Nordosten der Heilsame. Der Tod des Todes schütze.", "Northeast the auspicious. Death of death protect."),
    v(20, "idaṃ nṛsiṃha-kavacaṃ\nprahlāda-mukha-maṇḍitam\nbhaktimān yaḥ paṭhen nityaṃ\nsarva-pāpaiḥ pramucyate", "Wer es täglich ergeben liest, wird von Sünden gelöst.", "Who reads it daily with devotion is freed from sins."),
    v(21, "putravān dhanavān loke\ndīrghāyur upajāyate\nyaṃ yaṃ kāmayate kāmaṃ\ntaṃ taṃ prāpnoty asaṃśayam", "Kinder, Reichtum, langes Leben. Was man wünscht, kommt.", "Children, wealth, long life. What one desires comes."),
    v(22, "sarvatra jayam āpnoti\nsarvatra vijayī bhavet\nbhūmy-antarikṣa-divyānāṃ\ngrahāṇāṃ vinivāraṇam", "Überall Sieg. Es wehrt die Planeten ab.", "Victory everywhere. It turns planets aside."),
    v(23, "vṛścikoraga-sambhūta\nviṣāpaharaṇaṃ param\nbrahma-rākṣasa-yakṣāṇāṃ\ndūrotsāraṇa-kāraṇam", "Gegen Gift und Yakshas.", "Against poison and yakshas."),
    v(24, "bhūrje vā tāla-patre vā\nkavacaṃ likhitaṃ śubham\nkara-mūle dhṛtaṃ yena\nsidhyeyuḥ karma-siddhayaḥ", "Auf Birkenrinde oder Palmblatt geschrieben gelingt das Werk.", "Written on birch or palm-leaf, works succeed."),
    v(25, "devāsura-manuṣyeṣu\nsvaṃ svam eva jayaṃ labhet\neka-sandhyaṃ tri-sandhyaṃ vā\nyaḥ paṭhen niyato naraḥ", "Wer es einmal oder dreimal am Tag liest, siegt.", "Who reads it once or three times a day wins."),
    v(26, "sarva-maṅgala-māṅgalyaṃ\nbhuktiṃ muktiṃ ca vindati\ndvā-triṃśati-sahasrāṇi\npaṭec chuddhātmanāṃ nṛṇām", "Segen, Genuss und Befreiung.", "Auspiciousness, enjoyment and liberation."),
    v(27, "kavacasyāsya mantrasya\nmantra-siddhiḥ prajāyate\nanena mantra-rājena\nkṛtvā bhasmābhimantraṇam", "Durch dieses Königsmantra reift die Siddhi.", "By this king of mantras siddhi arises."),
    v(28, "tilakaṃ vinyased yas tu\ntasya graha-bhayaṃ haret\ntri-vāraṃ japamānas tu\ndattaṃ vāry abhimantrya ca", "Tilaka und geweihtes Wasser nehmen die Planetenangst.", "Tilaka and consecrated water remove fear of planets."),
    v(29, "prāśayed yo naro mantraṃ\nnṛsiṃha-dhyānam ācaret\ntasya rogāḥ praṇaśyanti\nye ca syuḥ kukṣi-sambhavāḥ", "Wer meditiert — Krankheiten weichen.", "Who meditates — diseases perish."),
    v(30, "kim atra bahunoktena\nnṛsiṃha-sadṛśo bhavet\nmanasā cintitaṃ yat tu\nsa tac cāpnoty asaṃśayam", "Man wird Nrisimha gleich. Was der Geist denkt, kommt.", "One becomes like Nrisimha. What the mind thinks comes."),
    { nr:"Iti", ch:L, sa:"iti śrī-brahmāṇḍa-purāṇe\nprahlādoktaṃ\nśrī-nṛsiṃha-kavacam\nsampūrṇam", ue:"So endet das von Prahlada gesprochene Kavacham.", en:"Thus ends the Kavacham spoken by Prahlada." },
    { nr:"Mantra", ch:"Dm              C", sa:"oṃ namo bhagavate\nnarasiṃhāya", ue:"Om, Verehrung dem Herrn Narasimha.", en:"Om, obeisance to Lord Narasimha." },
    { nr:"Ugram", ch:L, sa:"ugraṃ vīraṃ mahā-viṣṇuṃ\njvalantaṃ sarvato mukham\nnṛsiṃhaṃ bhīṣaṇaṃ bhadraṃ\nmṛtyor mṛtyuṃ namāmy aham", ue:"Den Furchtbaren, den Helden — ich verneige mich.", en:"The fierce, the hero — I bow." },
    { nr:"Jaya", ch:"Bb          F     C           F", sa:"jaya nṛśiṅga dev\nnṛśiṅga dev nṛśiṅga dev\njaya nṛśiṅga dev ://", ue:"Sieg Narasimha Deva.", en:"Victory, Narasimha Deva." },
    /* [Grok.com] Heft Seite 12, nach dem Kavacam gesungen. Vier Zeilen je Strophe, eigener Eintrag bleibt. */
    { nr:"Namaste", ch:"Dm   Bb    C     Dm", sa:"namaste nārasiṁhāya\nprahlādāh-lāda dāyine\nhiraṇyākaśipur vakṣaḥ\nśilā taṅka nakhālāye", ue:"Verehrung dir, Narasimha, der du Prahlada Freude schenkst. Deine Nägel, wie Meißel, spalteten die Brust des Hiranyakashipu.", en:"Obeisance to Narasimha, who gives joy to Prahlada. Your nails, like chisels, split the chest of Hiranyakashipu." },
    { nr:"Ito", ch:"Dm   Bb    C     Dm", sa:"ito nṛsiṁho parato nṛsiṁho\nyato yato yāmi tato nṛsiṁho\nbahir nṛsiṁho hṛdaye nṛsiṁho\nnṛsiṁham ādiṁ śaranam prapadye", ue:"Hier Narasimha, dort Narasimha. Wohin ich gehe, dort Narasimha. Außen Narasimha, im Herzen Narasimha. Bei Narasimha, dem Ursprung, suche ich Zuflucht.", en:"Narasimha here, Narasimha there. Wherever I go, there is Narasimha. Outside Narasimha, in the heart Narasimha. In Narasimha, the origin, I take refuge." },
    { nr:"Tava", ch:"Dm    F    C    Dm", sa:"tava kara kamala vare\nnakhām adbhuta śriṅgāṁ\ndalitā hiraṇyakaśipu\ntanu bhṛṅgam", ue:"An deiner Lotoshand die wundersame Nagelspitze, die den Leib des Hiranyakashipu wie eine Wespe zerbrach.", en:"On your lotus hand the wondrous nail-point, which tore the body of Hiranyakashipu like a wasp." },
    { nr:"Keshava", ch:"Dm    F    C    Bb", sa:"keśava dhṛta nara hari rūpa\njaya jagadīśa hare\njaya jagadīśa hare\njaya jagadīśa hare", ue:"Keshava, der die Gestalt von Mensch und Löwe annahm. Sieg, Herr der Welt, Hari.", en:"Keshava who took the form of man and lion. Victory, Lord of the world, Hari." }
  ];
})();

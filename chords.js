/* [Grok.com] Akkorde + Tonquellen */
(function(){
  function byId(id){ return PRAYERS.find(function(p){ return p.id===id; }); }
  var m=byId("mukunda");
  if(m){
    m.audio="audio/mukunda-mala.mp3";
    m.preferFile=true;
    m.quelle="Bhakti Marga Mix 12.12.2022 · Heft";
    m.hinweis="Ton: 2022-12-12 Mix Mukunda Mala Stotram. Fehlt audio/mukunda-mala.mp3, fällt der Player auf YouTube zurück.";
  }
  var n=byId("narasimha");
  if(n){
    n.titel="Shri Nrisimha Prayer";
    n.quelle="Prathana with chords, Seite 12";
    n.hinweis="Akkorde aus dem Musikerheft. Knopf Akkorde.";
    n.zeilen=[
      { nr:"1", ch:"Dm   Bb    C     Dm", sa:"namaste narasimhaya ://", ue:"Verehrung dir, Narasimha." },
      { nr:"2", ch:"Dm   Bb    C     Dm", sa:"prahladah-lada dayine ://", ue:"der du Prahlada Freude schenkst." },
      { nr:"3", ch:"Dm   Bb    C     Dm", sa:"hiranyakashipur vakshah ://", ue:"dessen Brust Hiranyakashipu." },
      { nr:"4", ch:"Dm   Bb    C     Dm", sa:"shila tanka nakhalaye ://", ue:"von den Nagel-Meisseln gespalten." },
      { nr:"5", ch:"Dm   Bb    C     Dm", sa:"ito nrisimho parato nrisimho ://", ue:"Hier Narasimha, dort Narasimha." },
      { nr:"6", ch:"Dm   Bb    C     Dm", sa:"yato yato yami tato nrisimho ://", ue:"Wohin ich gehe, dort Narasimha." },
      { nr:"7", ch:"Dm   Bb    C     Dm", sa:"bahir nrisimho hridaye nrisimho ://", ue:"Aussen und im Herzen Narasimha." },
      { nr:"8", ch:"Dm   Bb    C     Dm", sa:"nrisimham adim sharanam prapadye ://", ue:"Bei ihm, dem Ursprung, suche ich Zuflucht." },
      { nr:"9", ch:"Dm                 F   C", sa:"tava kara kamala vare-e,", ue:"An deiner Lotoshand" },
      { nr:"10", ch:"Dm", sa:"nakham adbhuta shringam,", ue:"die wundersame Nagelspitze," },
      { nr:"11", ch:"F                 C", sa:"dalita hiranyakashipu,", ue:"die Hiranyakashipu zerbrach," },
      { nr:"12", ch:"Dm", sa:"tanu bhringam,", ue:"wie eine Wespe." },
      { nr:"13", ch:"Dm", sa:"keshava dhrta nara hari rupa,", ue:"Keshava als Mensch und Loewe." },
      { nr:"14", ch:"F   C", sa:"jaya jagadisha hare-e,", ue:"Sieg, Herr der Welt, Hari." },
      { nr:"15", ch:"Bb   C    Dm", sa:"jaya jagadisha hare ://", ue:"Sieg, Hari." },
      { nr:"16", ch:"Bb     F     C     F", sa:"jaya nrshinga dev, nrshinga dev ://", ue:"Sieg Narasimha Deva." }
    ];
  }
  var s=byId("suprabhatam");
  if(s){
    s.titel="Shri Krishna Suprabhatam";
    s.quelle="Prathana with chords, Seite 9";
    s.hinweis="Akkorde aus dem Musikerheft. Knopf Akkorde.";
    s.zeilen=[
      { nr:"1", ch:"D                         C", sa:"shri krishna vishnu madhu sudana kaitabhare", ue:"Krishna, Vishnu, Toeter Madhus und Kaitabhas." },
      { nr:"2", ch:"D                         C", sa:"narayanacyuta tri-vikrama cakra-pane", ue:"Narayana, Acyuta, Diskus in der Hand." },
      { nr:"3", ch:"D                         C", sa:"daityadi sarja dhara shri dhara vasudeva", ue:"Vasudeva, Traeger der Shri." },
      { nr:"4", ch:"D          G        D", sa:"gopala krishna haraye tava suprabhatam", ue:"Gopala Krishna, ein gesegnetes Erwachen dir." },
      { nr:"Schluss", ch:"D                      G", sa:"shri krishna suprabhatam ye pathanti aharnisham", ue:"Wer das Krishna-Suprabhatam Tag und Nacht liest." },
      { nr:"Schluss", ch:"                   D", sa:"bhuri krtan maha papan shri krishnar-graha hetukam", ue:"dessen grosse Sunden werden um Krishnas willen getragen." }
    ];
  }
  if(!byId("kavacham")){
    PRAYERS.push({
      id: "kavacham",
      titel: "Shri Nrisimha Kavaca Stotram",
      autor: "Prahlada · Brahmanda Purana · Bhakti Marga Music",
      youtube: "BPxKkueXPPE",
      quelle: "Prathana with chords, Seite 20–21 · YouTube Bhavani",
      hinweis: "Schutzhymne. Akkorde stehen im Heft über den ersten Zeilen (Dm Bb C Dm).",
      zeilen: [
        { nr:"1", ch:"Dm     Bb      C      Dm", sa:"nrisimha kavacam vaksye prahladenoditam pura", ue:"Ich spreche das Narasimha-Kavacham, einst von Prahlada gesagt." },
        { nr:"2", ch:"Bb      C      Dm", sa:"sarva raksa karam punyam sarvopadrava nashanam", ue:"Es schuetzt ganz, ist heilig und loescht jedes Unglueck." },
        { nr:"3", ch:"Bb      C       F", sa:"sarva sampat karam caiva", ue:"Es bringt allen Wohlstand," },
        { nr:"4", ch:"Gm      C      Dm", sa:"svarga moksa pradayakam", ue:"Himmel und Befreiung." },
        { nr:"5", ch:"Bb      C      Dm", sa:"dhyatva nrisimham devesham hema simhasana sthitam", ue:"Man sinne auf Nrisimha, den Goetterherrn auf goldenem Loewenthron." },
        { nr:"6", sa:"vivritasyam trinayanam sharad indu sama prabham", ue:"Mit offenem Mund, drei Augen, Glanz wie der Herbstmond." },
        { nr:"7", sa:"laksmyalingita vamangam vibhutibhir upashritam", ue:"Lakshmi umarmt seine linke Seite, Reichtuemer umgeben ihn." },
        { nr:"8", sa:"catur bhujam komalangam svarna kundala shobhitam", ue:"Vier Arme, zarter Leib, goldene Ohrringe." },
        { nr:"9", sa:"sva hrt kamala sam-vasam krtva tu kavacam pathet", ue:"Ihn im Herzlotus wohnen lassen — dann lese man das Kavacham." },
        { nr:"10", sa:"nrisimho me shirah patu loka raksartha sambhavah", ue:"Nrisimha schuetze mein Haupt, der zum Schutz der Welten erschien." },
        { nr:"11", sa:"nrisimho me drshau patu soma suryagni locanah", ue:"Nrisimha schuetze meine Augen, dessen Blick Mond, Sonne und Feuer ist." },
        { nr:"12", sa:"nrisimhah patu me kantham skandhau bhu-bhrd ananta krt", ue:"Nrisimha schuetze Hals und Schultern." },
        { nr:"13", sa:"karau me deva varado nrisimhah patu sarvatah", ue:"Die Haende schuetze der Wunschgewährer Nrisimha von allen Seiten." },
        { nr:"14", sa:"hrdayam yogi sadhyash ca nivasam patu me harih", ue:"Das Herz — Wohnsitz der Yogis — schuetze Hari." },
        { nr:"15", sa:"nabhim me patu nriharih sva nabhi brahma samstutah", ue:"Den Nabel schuetze Nrihari, den Brahma aus seinem Nabel preist." },
        { nr:"16", sa:"padau me nriharishvarah sahasra shirsa purushah patu me sarva-shas-tanum", ue:"Die Fuesse schuetze der Herr. Der Tausendkoepfige schuetze den ganzen Leib." },
        { nr:"17", sa:"mahograh purvatah patu maha viragrajo gnitah", ue:"Der Furchtbare schuetze im Osten, der grosse Held im Suedosten." },
        { nr:"18", sa:"maha vishnur daksine tu maha jvalas tu nairrtah", ue:"Maha-Vishnu im Sueden, die grosse Flamme im Suedwesten." },
        { nr:"19", sa:"pashcime patu sarvesho dishi me sarvatomukhah", ue:"Im Westen der Allherr, nach allen Richtungen der Allgesichtige." },
        { nr:"20", sa:"samsara bhayatah patu mrtyor mrtyur nrkeshari", ue:"Vor der Angst des Werdens schuetze der Tod des Todes, der Menschenloewe." },
        { nr:"21", sa:"idam nrisimha kavacam prahlada mukha manditam", ue:"Dies ist das Narasimha-Kavacham, aus Prahladas Mund geschmueckt." },
        { nr:"22", sa:"bhaktiman yah pathen nityam sarva papaih pramucyate", ue:"Wer es taeglich ergeben liest, wird von allen Suenden geloest." },
        { nr:"23", sa:"putravan dhanavan loke dirghayur upajayate", ue:"Kinder, Reichtum und langes Leben entstehen in der Welt." },
        { nr:"24", sa:"sarvatra jayam apnoti sarvatra vijayi bhavet", ue:"Ueberall Sieg, ueberall wird man Sieger." },
        { nr:"25", sa:"iti shri brahmanda purane prahladoktam shri nrisimha kavacam sampurnam", ue:"So endet im Brahmanda-Purana das von Prahlada gesprochene Shri-Nrisimha-Kavacham." },
        { nr:"26", ch:"Dm              C", sa:"om namo bhagavate narasimhaya", ue:"Om, Verehrung dem Herrn Narasimha." },
        { nr:"27", sa:"ugram viram maha vishnum jvalantam sarvato mukham", ue:"Den Furchtbaren, den Helden, den grossen Vishnu, allseits lodernd." },
        { nr:"28", sa:"nrisimham bhishanam bhadram mrtyur mrtyum namamy aham", ue:"Nrisimha, schrecklich und heilsam, Tod des Todes — ich verneige mich." },
        { nr:"29", ch:"Bb          F", sa:"jaya nrshinga dev", ue:"Sieg Narasimha Deva." },
        { nr:"30", ch:"C           F", sa:"nrshinga dev nrshinga dev jaya nrshinga dev ://", ue:"Sieg Narasimha Deva." }
      ]
    });
  }
})();

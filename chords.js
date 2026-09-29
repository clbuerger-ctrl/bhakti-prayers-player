/* [Grok.com] Akkorde: Prathana with chords, Daily Prayer Edition 05-04-2024 */
(function(){
  function byId(id){ return PRAYERS.find(function(p){ return p.id===id; }); }
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
})();

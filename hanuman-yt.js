/* [Grok-Bot] V1.55: Hanuman Chalisa spielt das YouTube-Video der Prabhus (fBw-BSoZGgM), die MP3 bleibt als Ersatz. Mit Strophenanfaengen fuer den Autoscroll. */
(function(){
  var h = PRAYERS.find(function(p){ return p.id==="hanuman"; });
  if(!h) return;
  h.youtube = "fBw-BSoZGgM";
  h.preferFile = false;
  /* Strophenanfaenge im Video (Sekunden je Strophe), per Spracherkennung der Tonspur ermittelt */
  h.marksYt = [0, 24.7, 46.5, 78.8, 99.5, 119.9, 138.8, 158.9, 178.3, 197.8, 216.9, 237.1, 257.1, 275.3, 293.3, 310.8, 327.9, 344.8, 360.9, 376.9, 392.5, 407.5, 421.9, 436.5, 454.5, 489.5, 509.5];
  h.quelle = "Prathana with chords \u00b7 Sri Vitthal Dham \u00b7 S. 21\u201323 \u00b7 Ton: YouTube (Prabhus), MP3 als Ersatz";
})();

/* [Grok-Bot] V1.60: Hanuman Chalisa spielt die Aufnahme von Pandita Bhavani (Telegram / Prarthana mit Rishi Aaradhakananda) anstelle der Prabhu-MP3. YouTube rhSVddEZW88. Alte Strophenzeiten verworfen. */
(function(){
  var h = PRAYERS.find(function(p){ return p.id==="hanuman"; });
  if(!h) return;
  h.youtube = "rhSVddEZW88";
  h.preferFile = false;
  h.audio = "";
  h.marksYt = [];
  /* [Grok-Bot] V1.57: Dohā und Kīrtan ohne Ziffern im Namen, damit vor und nach den 40 Versen keine falschen Nummern 1 und 2 erscheinen */
  var NR = { "Doh\u0101 1":"Doh\u0101\u00b7a", "Doh\u0101 2":"Doh\u0101\u00b7b", "K\u012brtan 1":"K\u012brtan\u00b7a", "K\u012brtan 2":"K\u012brtan\u00b7b" };
  h.zeilen.forEach(function(z){ if(NR[z.nr]) z.nr = NR[z.nr]; });
  h.quelle = "Prathana with chords \u00b7 Sri Vitthal Dham \u00b7 S. 21\u201323 \u00b7 Ton: Pandita Bhavani (Telegram, YouTube)";
})();

/* [Grok-Bot] V1.90: Grossbild – lange Strophen nur noch teilen, wenn es die Schrift wirklich vergroessert.
   Ursache (Ramanuja Mangalam, hochkant): Der Refrain hat zwei lange Zeilen. Die Schrift wird von der Breite begrenzt (ca. 20 px),
   liegt damit unter der Mindestgroesse (22 px), also teilte v183 die Strophe auf zwei Seiten mit je einer Zeile. Weil die Breite
   begrenzt, wurde jede Zeile aber kaum groesser (20 bzw. 20,8 px) - man sah nur eine Zeile, die zweite erst spaeter, die
   Uebersetzung nur auf Seite 2. Jetzt: Teilung nur, wenn beide Teile mindestens 15 % groesser werden; sonst ganze Strophe auf einer Seite. */
window.BPP_BUILD="1.90";
window.bppFsSplitOk=function(f, fa, fb, n, cut){
  if(!(f>0)) return true;
  return Math.min(fa, fb)>=f*1.15;
};

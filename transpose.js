/* [Grok.com] Akkorde um Halbtöne verschieben */
var NAMES=["C","C#","D","Eb","E","F","F#","G","Ab","A","Bb","B"];
var ALIAS={Db:"C#","D#":"Eb",Gb:"F#","G#":"Ab","A#":"Bb",Cb:"B","E#":"F","Fb":"E","B#":"C"};
function noteIndex(n){
  n=String(n||"").replace("♯","#").replace("♭","b");
  if(ALIAS[n]) n=ALIAS[n];
  return NAMES.indexOf(n);
}
function shiftRoot(root, steps){
  var i=noteIndex(root);
  if(i<0) return root;
  return NAMES[(i+((steps%12)+12))%12];
}
function shiftToken(tok, steps){
  var m=String(tok).match(/^([A-G](?:#|b)?)(.*)$/);
  if(!m) return tok;
  return shiftRoot(m[1], steps)+m[2];
}
function shiftChordLine(line, steps){
  if(!line || !steps) return line||"";
  return String(line).replace(/[A-G](?:#|b)?(?:maj7|maj|min|dim|aug|sus4|sus2|sus|add9|m7|m|7|6|9|11|13)?/g, function(tok){
    return shiftToken(tok, steps);
  });
}

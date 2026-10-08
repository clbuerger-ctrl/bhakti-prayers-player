/* [Grok-Bot] V2.00: Hanuman Chalisa - Refrain "ramaji se rama rama kahiyo kahiyo-ji hanumana-ji" (2x) als eigene Strophe nach Doha 2,
   nach jeder 2. Strophe und nach dem Kirtan (wie in der Aufnahme von Pandita Bhavani und in Hanuman_Chalisa_V3.docx).
   Letzte Zeile jeder 2. Strophe mit 2x. Akkord ueber dem Refrain: Tonika (V3.docx: Am, hier in der Tonart der Heft-Akkorde: D).
   Feste Abfolge jetzt linear (eigene Strophe je Refrain), Zeiten wie V1.99 gemessen, erster Refrain bei 80,0 s. Alte Strophen-Tipps einmalig geloescht. */
window.BPP_BUILD="2.00";
(function(){
  if(typeof PRAYERS==="undefined" || window.bppV200) return; window.bppV200=1;
  var P=PRAYERS.find(function(p){ return p.id==="hanuman-bhavani"; /* [Grok.com] Refrain nur Bhavani, nicht Kanakadas */ }); if(!P || !P.zeilen) return;
  var R={ nr:"Refrain", ch:"D", sa:"r\u0101maji se r\u0101ma r\u0101ma kahiyo kahiyo-ji hanum\u0101na-ji",
    en:"Hanumanji, please say \u201cRama, Rama\u201d to Ramaji for us \u2013 ask Him to accept the greetings of the devotees.",
    ue:"Hanumanji, sag Ramaji f\u00fcr uns \u201eRama, Rama\u201c \u2013 bitte ihn, die Gr\u00fc\u00dfe der Gottgeweihten anzunehmen.",
    fr:"Hanumanji, dis pour nous \u00ab Rama, Rama \u00bb \u00e0 Ramaji \u2013 prie-le d\u2019accepter les salutations des d\u00e9vots.",
    es:"Hanumanji, dile por nosotros \u00abRama, Rama\u00bb a Ramaji: p\u00eddele que acepte los saludos de los devotos.",
    ru:"\u0425\u0430\u043d\u0443\u043c\u0430\u043d\u0434\u0436\u0438, \u0441\u043a\u0430\u0436\u0438 \u0437\u0430 \u043d\u0430\u0441 \u0420\u0430\u043c\u0430\u0434\u0436\u0438 \u00ab\u0420\u0430\u043c\u0430, \u0420\u0430\u043c\u0430\u00bb \u2013 \u043f\u043e\u043f\u0440\u043e\u0441\u0438 \u0415\u0433\u043e \u043f\u0440\u0438\u043d\u044f\u0442\u044c \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f \u043f\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445.",
    hi:"\u0939\u0947 \u0939\u0928\u0941\u092e\u093e\u0928\u091c\u0940, \u0939\u092e\u093e\u0930\u0940 \u0913\u0930 \u0938\u0947 \u0930\u093e\u092e\u091c\u0940 \u0938\u0947 \u201c\u0930\u093e\u092e, \u0930\u093e\u092e\u201d \u0915\u0939\u093f\u092f\u094b \u2013 \u0909\u0928\u0938\u0947 \u092d\u0915\u094d\u0924\u094b\u0902 \u0915\u093e \u092a\u094d\u0930\u0923\u093e\u092e \u0938\u094d\u0935\u0940\u0915\u093e\u0930 \u0915\u0930\u0928\u0947 \u0915\u0940 \u0935\u093f\u0928\u0924\u0940 \u0915\u0930\u094b\u0964" };
  function ref(){ var o={}; Object.keys(R).forEach(function(k){ o[k]=R[k]; }); return o; }
  var Z=[];
  P.zeilen.forEach(function(z){
    if(/^Refrain/i.test(z.nr)){ Z.push(ref()); return; }
    var n=parseInt(z.nr,10);
    if(/^\d+$/.test(String(z.nr)) && n%2===0) z.x2=true;
    Z.push(z);
    if(/^\d+$/.test(String(z.nr)) && n%2===0) Z.push(ref());
    if(/^K\u012brtan\u00b7b|^K\u012brtan 2/.test(String(z.nr))) Z.push(ref());
  });
  P.zeilen=Z;
  function hook(){
    if(typeof window.stanzaGroups!=="function" || window.stanzaGroups._bpp200) return;
    var base=window.stanzaGroups;
    window.stanzaGroups=function(Q){
      if(Q && Q.id==="hanuman" && Q.zeilen) return Q.zeilen.map(function(z,n){ return { key:(typeof stanzaKey==="function"?stanzaKey(z.nr):String(z.nr)), start:n, idx:[n] }; });
      return base.apply(this, arguments);
    };
    window.stanzaGroups._bpp200=1;
  }
  hook(); document.addEventListener("DOMContentLoaded", hook); setTimeout(hook, 0); setTimeout(hook, 600);
  var T=[8.7,44.2,59.8,80.0,101.1,115.3,133.3,152.9,166.5,183.4,202.2,215.1,231.5,249.9,262.5,278.5,296.6,309.1,324.9,340.3,352.5,366.2,381.8,392.4,405.7,421.0,431.3,444.5,459.8,470.1,483.2,494.0,508.3,521.2,536.2,551.3,583.4,616.6,639.3];
  P.seqFile=T.map(function(t,g){ return [t,g]; }); P.marksFile=T.slice(); P._bppEstMarks=0; P._bppEstSrc="";
  try{
    if(localStorage.getItem("bpp-hn-v200")!=="1"){
      var s=JSON.parse(localStorage.getItem("bpp-marks")||"{}");
      Object.keys(s).forEach(function(k){ if(String(k).indexOf("hanuman")===0) delete s[k]; });
      localStorage.setItem("bpp-marks", JSON.stringify(s)); localStorage.setItem("bpp-hn-v200","1");
    }
  }catch(e){}
  function show(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V2.00"; document.title="Bhakti Prayers Player V2.00"; }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", show); else show();
  setTimeout(show, 900); setTimeout(show, 1500);
})();

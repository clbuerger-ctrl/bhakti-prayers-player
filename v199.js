/* [Grok-Bot] V1.99: Hanuman Chalisa - Zeitmarken fuer die neue MP3 (Pandita Bhavani, audio/hanuman.mp3, 665 s) neu gemessen.
   Messung wie Kavaca V1.96: Gesangsspur per Stimmtrennung (Demucs), Atempausen aus dem Pegel, Zuordnung zum Text per
   Spracherkennungs-Bewertung (Whisper). Aufbau der Aufnahme: Intro (mehrfach), Doha 1, Doha 2 + Refrain, dann je zwei Verse
   und der Refrain "siya vara ramacandra pada jai saranam" (Ruecksprung auf die Strophe mit dem Refrain), Doha, Kirtan 1,
   Kirtan 2, Refrain, Jai. Als feste Abfolge (seqFile); Wechsel am Gesangsende (Pausentabelle). YouTube unveraendert.
   Die alten Marken (tr-hi.js V1.71) gehoerten zur Prabhu-Datei. MP3 ist erste Quelle (wie in V1.98 gewollt), ausser der
   Nutzer hat YT gewaehlt. Alte gespeicherte Strophen-Tipps fuer hanuman werden einmalig geloescht. */
window.BPP_BUILD="1.99";
(function(){
  if(typeof PRAYERS==="undefined" || window.bppV199) return; window.bppV199=1;
  var P=PRAYERS.find(function(p){ return p.id==="hanuman"; }); if(!P) return;
  P.seqFile=[[8.7,0],[44.2,1],[59.8,2],[101.1,3],[115.3,4],[133.3,2],[152.9,5],[166.5,6],[183.4,2],[202.2,7],[215.1,8],[231.5,2],[249.9,9],[262.5,10],[278.5,2],[296.6,11],[309.1,12],[324.9,2],[340.3,13],[352.5,14],[366.2,2],[381.8,15],[392.4,16],[405.7,2],[421.0,17],[431.3,18],[444.5,2],[459.8,19],[470.1,20],[483.2,2],[494.0,21],[508.3,22],[521.2,2],[536.2,23],[551.3,24],[583.4,25],[616.6,2],[639.3,26]];
  var m=[]; P.seqFile.forEach(function(e){ if(m[e[1]]==null) m[e[1]]=e[0]; }); P.marksFile=m; P._bppEstMarks=0; P._bppEstSrc="";
  if(window.BPP_PAUSES) window.BPP_PAUSES["hanuman|file"]=[6654,0,86,120,123,160,164,200,203,240,244,278,281,316,318,351,355,388,391,429,442,476,479,513,518,555,559,595,598,634,638,655,656,673,677,714,718,753,758,798,801,861,864,892,895,939,940,951,953,967,971,1006,1011,1079,1082,1115,1118,1149,1153,1187,1189,1222,1225,1256,1260,1292,1295,1329,1333,1372,1375,1389,1392,1418,1421,1461,1463,1489,1492,1525,1529,1561,1564,1595,1598,1628,1631,1661,1665,1696,1699,1730,1732,1762,1765,1795,1798,1830,1834,1861,1862,1914,1918,1955,1958,1969,1970,1984,1986,2015,2022,2046,2047,2084,2087,2116,2119,2148,2151,2180,2183,2213,2216,2244,2248,2276,2280,2310,2315,2394,2398,2462,2465,2494,2499,2529,2531,2560,2563,2591,2594,2622,2625,2655,2657,2687,2688,2716,2719,2747,2750,2781,2785,2821,2823,2862,2866,2902,2905,2928,2931,2960,2966,3025,3029,3056,3060,3088,3091,3119,3122,3150,3153,3181,3184,3212,3215,3245,3249,3322,3326,3358,3361,3402,3403,3413,3416,3441,3444,3468,3471,3496,3498,3522,3525,3576,3579,3603,3606,3629,3632,3658,3662,3728,3732,3764,3766,3786,3789,3814,3818,3869,3872,3895,3898,3921,3924,3974,3976,3999,4002,4052,4057,4079,4080,4123,4126,4156,4159,4206,4210,4259,4262,4311,4313,4388,4391,4414,4416,4441,4445,4476,4478,4594,4598,4646,4650,4672,4675,4698,4701,4725,4727,4774,4776,4828,4832,4896,4899,4939,4940,4978,4981,5029,5032,5055,5058,5079,5083,5106,5109,5156,5159,5181,5184,5208,5212,5242,5244,5254,5256,5276,5279,5331,5362,5415,5420,5452,5457,5488,5513,5549,5552,5584,5588,5619,5623,5654,5659,5691,5694,5726,5730,5761,5764,5831,5834,5900,5903,5971,5974,6044,6047,6117,6119,6163,6166,6196,6199,6208,6212,6306,6308,6319,6322,6336,6393,6572,6654];
  try{ var ch=JSON.parse(localStorage.getItem("bpp-src")||"{}")||{}; if(ch.hanuman!=="yt" && P.audio) P.preferFile=true; }catch(e){ if(P.audio) P.preferFile=true; }
  try{
    if(localStorage.getItem("bpp-hn-v199")!=="1"){
      var s=JSON.parse(localStorage.getItem("bpp-marks")||"{}");
      Object.keys(s).forEach(function(k){ if(String(k).indexOf("hanuman")===0) delete s[k]; });
      localStorage.setItem("bpp-marks", JSON.stringify(s)); localStorage.setItem("bpp-hn-v199","1");
    }
  }catch(e){}
  function show(){ var v=document.querySelector("h1 .ver"); if(v) v.textContent="V1.99"; document.title="Bhakti Prayers Player V1.99"; }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", show); else show();
  setTimeout(show, 900); setTimeout(show, 1500);
})();

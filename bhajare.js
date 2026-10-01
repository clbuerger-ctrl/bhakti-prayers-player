/* [Grok-Bot] V1.48: Sri Vishwananda Bhajare (Paramahamsa Sri Swami Vishwananda Arati) als neuer Prayer, Ton aus Dropbox, Text und Akkorde aus dem Prathana-Heft S. 24 */
(function(){
  var audio = "https://www.dropbox.com/scl/fo/9jrivp0fkl4bfo9t0dejx/ALN7EX-IbJTtEvxZUrmXkAs/Vishwananda-Arati.mp3?rlkey=s8lox2d2652b2i133h1jjty3k&dl=1";
  var B = "Sri Vishwananda Bhajare\nSwami Vishwananda Bhajare";
  var Bde = "Singe und verehre Sri Vishwananda, Swami Vishwananda.";
  var Ben = "Sing and worship Sri Vishwananda, Swami Vishwananda.";
  function v(n, ch, sa, ue, en){ return { nr:n, ch:ch, sa:sa, ue:ue, en:en }; }
  var VCH = "C     G     C     G     F     C     G     F     C";
  PRAYERS.push({
    id: "bhajare",
    titel: "Sri Vishwananda Bhajare",
    autor: "Paramahamsa Sri Swami Vishwananda Ārati",
    audio: audio,
    preferFile: true,
    quelle: "Dropbox · Paramahamsa Sri Swami Vishwananda Arati (2).mp3 · Prathana-Heft S. 24",
    hinweis: "Text und Akkorde wie im Prathana-Heft. Übersetzung sinngemäß.",
    hinweisDe: "Text und Akkorde wie im Prathana-Heft. Übersetzung sinngemäß.",
    hinweisEn: "Lyrics and chords as in the Prathana booklet. Translation approximate.",
    zeilen: [
      v("Refrain", "C     G     F     G     C", B, Bde, Ben),
      v("1a", "C     G", "Hridayake Dwara Jagane\nShyamala Rupa Dhare ://", "Er erwacht an der Pforte des Herzens und nimmt die dunkle Gestalt (Krishnas) an.", "Awakening at the door of the heart, he takes on the dark form (of Krishna)."),
      v("1b", "F     G     C", B, Bde, Ben),
      v("2a", VCH, "Satchidānanda Paramātmā\nPūrna Prema Avatār\nSwami Pūrna Prema Avatār", "Sein, Bewusstsein und Glückseligkeit, das höchste Selbst, Avatar der vollkommenen Liebe.", "Being, consciousness and bliss, the supreme Self, avatar of perfect love."),
      v("2b", "C     G     F", "Giridhāri Ke Chākar\nGiridhāri Ke Chākar\nJo Srishti Karatār", "Diener Giridharis (Krishnas), der die Schöpfung hervorbringt.", "Servant of Giridhari (Krishna), who brings forth creation."),
      v("2c", "F     G     C", B, Bde, Ben),
      v("3a", VCH, "Guruji Ke Charano Mein,\nJo Koi Dhyāna Kare\nSwami Jo Koi Dhyāna Kare", "Wer zu Gurujis Füßen meditiert,", "Whoever meditates at Guruji's feet"),
      v("3b", "C     G     F", "Āvāgamana Mitāve ://\nMoksha Prasāda Pāve", "dem endet das Kommen und Gehen der Wiedergeburt, er empfängt die Gnade der Befreiung.", "ends the coming and going of rebirth and receives the grace of liberation."),
      v("3c", "F     G     C", B, Bde, Ben),
      v("4a", VCH, "Padhe Gūrūvānī\nNita Ūthi Kriyā Kare\nSwami Nita Ūthi Kriyā Kare", "Wer Gurujis Worte liest, täglich früh aufsteht und Kriya übt,", "Whoever reads Guruji's words, rises daily and practises Kriya,"),
      v("4b", "C     G     F", "Nārāyana Mantra Ki Japana ://\nManoratha Pūrna Kare", "und das Narayana-Mantra wiederholt, dem erfüllen sich die Herzenswünsche.", "and repeats the Narayana mantra, has the wishes of the heart fulfilled."),
      v("4c", "F     G     C", B, Bde, Ben),
      v("5a", VCH, "Bhaktana Ki Dukha Haratā\nHridaya Se Prem Kare\nSwami Hridaya Se Prem Kare", "Er nimmt das Leid der Devotees und liebt aus dem Herzen.", "He takes away the devotees' sorrow and loves from the heart."),
      v("5b", "C     G     F", "Main Hūn Patita Abhāgi ://\nGuruji Kripā Kare", "Ich bin gefallen und glücklos, Guruji, schenke mir Gnade.", "I am fallen and unfortunate, Guruji, grant me grace."),
      v("5c", "F     G     C", B, Bde, Ben),
      v("6a", VCH, "Tum Karunkripā Ke Sāgar\nKripā Karo Swāmī\nDaya Karo Swāmī", "Du bist ein Ozean des Mitgefühls und der Gnade. Sei gnädig, Swami, sei barmherzig, Swami.", "You are an ocean of compassion and grace. Be gracious, Swami, be merciful, Swami."),
      v("6b", "C     G     F", "Apne Charano Mein Lijiye ://\nPrabhu Antaryāmi", "Nimm mich zu deinen Füßen, Herr, der du im Innern wohnst.", "Take me at your feet, Lord who dwells within."),
      v("6c", "F     G     C", B + "\n" + B + "\n" + B, Bde, Ben),
      v("Chakar a", "C     G     C     F     C", "Mhane Chākar Rākho Ji, Sri Vishwananda,\nChākar Rākho Ji, Sri Vishwananda,\nChākar Rākho Ji, Sri Vishwananda,\nChākar Rākho Ji ://", "Behalte mich als deinen Diener, Sri Vishwananda.", "Keep me as your servant, Sri Vishwananda."),
      v("Chakar b", "F     C     G     C", "Chākar Rākho, Chākar Rākho, Chākar Rākho Ji ://", "Behalte mich als Diener, behalte mich als Diener.", "Keep me as your servant, keep me as your servant."),
      v("Chakar c", "C     G     C     F     C", "Mhane Chākar Rākho Ji, Sri Vishwananda,\nChākar Rākho Ji, Shyam Mhane,\nChākar Rākho Ji, Sri Vishwananda,\nChākar Rākho Ji, Gurudeva Mhane,\nChākar Rākho Ji, Sri Vishwananda,\nChākar Rākho Ji, Sri Vishwananda, …\nChākar Rākho Ji", "Behalte mich als deinen Diener, Sri Vishwananda, Shyam, Gurudeva.", "Keep me as your servant, Sri Vishwananda, Shyam, Gurudeva.")
    ]
  });
})();

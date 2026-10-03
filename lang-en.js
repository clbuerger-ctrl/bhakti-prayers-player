/* [Grok.com] V1.8 Sprache DE/EN + englische Lyrics-Uebersetzung */
(function(){
  var mukEn = [
    "In whose city the Ranga procession sounds day after day — that king Kulasekhara I bow to with my head.",
    "Beloved of Shri, giver of boons, ocean of compassion, dear to devotees — let me call you so every day, Mukunda.",
    "Victory to this Lord, son of Devaki. Victory to Krishna, lamp of the Vrishni line. Victory to cloud-dark, tender-limbed Mukunda, who lifts the earth's burden.",
    "Mukunda, bowing my head I ask one thing only: by your grace, may I never forget your lotus feet, life after life.",
    "I do not bow to your feet for heaven, nor to escape hell. Life after life I want to hold you in the house of the heart.",
    "I do not cling to duty, wealth, or pleasure. Whatever comes from past action, let it come. This alone I prize: unshaken devotion at your two lotus feet, birth after birth.",
    "Whether I dwell in heaven, on earth, or in hell — slayer of hell, even in dying I remember your feet.",
    "Krishna, this very day let the swan of my mind enter the cage of your lotus feet. At the hour of death, when breath is blocked, how could I remember you then?",
    "I think of Hari alone, always — the softly smiling lotus face, Nanda's son, higher than the high, praised by Narada and the sages.",
    "In Hari's lake of lotus hands and feet I plunge. Worn by the desert of becoming, today I drop the fatigue.",
    "Mind, do not stop delighting in the lotus-eyed slayer of Mura. I know no joy equal to the nectar of remembering Hari's feet.",
    "Do not fear, slow mind. Our master is Shridhara. Drop laziness and meditate on Narayana. Can he who lifts the world's sorrow fail his servant?",
    "For those tossed on the ocean of becoming, crushed by family burdens, sinking without a raft — let Vishnu's one boat be the refuge.",
    "Do not say: how can I cross this deep ocean? One devotion to the lotus-eyed Lord will surely carry you.",
    "We are sinking in the ocean called samsara. Giver of boons, give us the boat of devotion to your feet.",
    "May I never see those without devotion, never hear tales other than yours, never remember those who deny you, never live without your service, birth after birth.",
    "Tongue, praise Keshava. Mind, worship Shridhara. Hands, honor. Ears, hear. Eyes, look at Krishna. Feet, go to Hari's house. Head, bow to Adhokshaja.",
    "People, hear this cure for birth and death. Drink the one inner light named Krishna. That medicine gives the final peace.",
    "Mortals, the highest good in brief: leaving many views, repeat with bowing: om namo narayanaya.",
    "Earth is a speck, waters a drop, fire a spark — before your greatness all this is small.",
    "With folded hands, bowed head, trembling voice and tears: lotus-eyed one, let our life always taste the nectar of your feet.",
    "O cowherd, ocean of grace, lord of the ocean's daughter — protect me. Apart from you I know no other.",
    "May Gopala, the crest-jewel, grant us the highest good.",
    "Tongue, repeat always the Shri-Krishna mantra — the mantra that makes a life bear fruit.",
    "Mind, drink the divine Krishna medicine that ends delusion and the fear of becoming.",
    "Study, vows, gifts, baths — without remembrance of his two lotus feet they are an elephant's bath. That Lord is Narayana.",
    "Who has spoken the name Narayana and not received what they longed for — even the fallen? We did not speak it, and so came the pain of the womb.",
    "This is the fruit of my birth: remember me as the servant of the servants of your servants, Lord of the worlds.",
    "Narayana stands ready to give his own place — and we hunt some petty village chief. How mute we are.",
    "Kama, leave my mind. It is the home of Mukunda's lotus feet. You are already burned. Do you forget Murari's discus?",
    "Tongue, I fold my hands: speak the names that belong to Narayana.",
    "This body will fall, joint by joint. Fool, what medicine do you ask? Drink the Krishna elixir that knows no disease.",
    "Lakshmi is yours, Brahma your son, the Vedas your singers, Devaki your mother, Arjuna your friend. Apart from you I know nothing.",
    "May Krishna protect us. I bow to Krishna. I am Krishna's servant. Krishna, protect me.",
    "Be gracious, Lord. I am sinking in the ocean of becoming. You are the Supreme Person — lift me.",
    "I bow to Narayana's lotus feet, I worship, I speak the pure name, I remember the unchanging truth of Narayana.",
    "Shri-Natha, Narayana, Vasudeva, Shri-Krishna, dear to devotees, bearer of the discus, Padmanabha, Acyuta, Rama, Hari, Murari.",
    "They can say Ananta, Vaikuntha, Mukunda, Krishna, Govinda, Damodara, Madhava — and still they do not. How turned they are toward sorrow.",
    "Those who hold Vishnu always in the lotus of the heart reach the highest Vaishnava perfection.",
    "To the fair form speckled with spray of the milk ocean, resting on the serpent couch — to Madhava, slayer of Madhu, I bow.",
    "This work was made by king Kulasekhara, a bee at the lotus feet of the lotus-eyed Lord."
  ];
  var m = PRAYERS.find(function(p){ return p.id==="mukunda"; });
  if(m){
    m.zeilen.forEach(function(z,n){ if(mukEn[n]) z.en = mukEn[n]; });
    m.hinweisDe = "Sanskrit zum Mitsingen. Übersetzung über den Knopf. Akkorde aus dem Chords-Heft.";
    m.hinweisEn = "Sanskrit to chant along. Translation on the button. Chords from the chord booklet.";
  }
  var n = PRAYERS.find(function(p){ return p.id==="narasimha"; });
  if(n){
    var nEn = [
      "I bow to you, Narasimha.",
      "You who give joy to Prahlada.",
      "Whose nails split the chest of Hiranyakashipu.",
      "Like a chisel on stone.",
      "Here Narasimha, there Narasimha.",
      "Wherever I go, there is Narasimha.",
      "Outside Narasimha, in the heart Narasimha.",
      "In that first Narasimha I take refuge.",
      "On your lotus hand",
      "the wondrous nail-point",
      "that tore Hiranyakashipu",
      "like a wasp.",
      "Keshava who took the man-lion form",
      "victory, Lord of the world, Hari.",
      "Victory, Hari.",
      "Victory, Narasimha Deva."
    ];
    n.zeilen.forEach(function(z,i){ if(nEn[i]) z.en = nEn[i]; });
    n.hinweisDe = n.hinweis;
    n.hinweisEn = "Chords from the musicians booklet. Use the Chords button.";
  }
  var s = PRAYERS.find(function(p){ return p.id==="suprabhatam"; });
  if(s){
    var sEn = [
      "Shri Krishna, Vishnu, slayer of Madhu and Kaitabha.",
      "Narayana, Acyuta, Trivikrama, discus in hand.",
      "Vasudeva, bearer of Shri.",
      "Gopala Krishna, a blessed waking to you.",
      "Whoever reads the Krishna Suprabhatam day and night",
      "great sins are borne for Krishna's sake."
    ];
    s.zeilen.forEach(function(z,i){ if(sEn[i]) z.en = sEn[i]; });
    s.hinweisDe = s.hinweis;
    s.hinweisEn = "Chords from the musicians booklet. Use the Chords button.";
  }
  var k = PRAYERS.find(function(p){ return p.id==="kavacham"; });
  if(k){
    /* [Grok-Bot] V1.65: alte zeilenweise kEn-Liste entfernt – englische Verse kommen jetzt aus kavacham.js (SNKS 1–3) und werden hier nicht mehr ueberschrieben */
    k.hinweisDe = k.hinweis;
    k.hinweisEn = "Protective hymn. Chords sit over the first lines in the booklet (Dm Bb C Dm).";
  }
})();

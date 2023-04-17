
 var firebaseConfig = {
  apiKey: "AIzaSyBglc7caYsvYKsubhEqxmUI1D-cXHOP1Ow",
  authDomain: "matteleaderboard-ce1ed.firebaseapp.com",
  projectId: "matteleaderboard-ce1ed",
  storageBucket: "matteleaderboard-ce1ed.appspot.com",
  messagingSenderId: "1023484373225",
  appId: "1:1023484373225:web:3a801e7fb14dfe2277a878"
};




 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 // Lager en referanse til databasen
let db = firebase.firestore();

// Henter HTML-elementer

let inputEL = document.getElementById("inputNavn");
let knappEL = document.getElementById("sendPoeng");
let tabell = document.getElementById("leaderboard")



knappEL.addEventListener("click", leggTilScore);

function leggTilScore(event) {
  event.preventDefault()
  console.log(inputEL.value)
 db.collection("scores").add({
   name: inputEL.value, 
   score: localStorage.getItem("Poeng")
 });
}



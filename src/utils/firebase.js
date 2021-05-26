import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB6cj8_D1hEwxg3macX_fx4rqf4-wk-8ME",
    authDomain: "challenge-3b101.firebaseapp.com",
    databaseURL: "https://challenge-3b101.firebaseio.com",
    projectId: "challenge-3b101",
    storageBucket: "challenge-3b101.appspot.com",
    messagingSenderId: "113514583250",
    appId: "1:113514583250:web:d09b0833f4032a6517890b",
    measurementId: "G-FXT1YV9K1H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
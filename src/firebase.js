import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional (1-6-21).
const firebaseConfig = {
    apiKey: "AIzaSyC5q4U2c3wIz3MOFaJyOH8Tc2HM-H65F5s",
    authDomain: "challenge-d2a70.firebaseapp.com",
    projectId: "challenge-d2a70",
    storageBucket: "challenge-d2a70.appspot.com",
    messagingSenderId: "888900300093",
    appId: "1:888900300093:web:71cf1d569656b1f168e954",
    measurementId: "G-D5WR0R5NP4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

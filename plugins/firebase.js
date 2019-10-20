import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyACWeshBHc3dduzWpqfujllorVnh9ZX2Oc",
    authDomain: "fir-lol-club.firebaseapp.com",
    databaseURL: "https://fir-lol-club.firebaseio.com",
    projectId: "firebase-lol-club",
    storageBucket: "firebase-lol-club.appspot.com",
    messagingSenderId: "49267784168",
    appId: "1:49267784168:web:7a7b701728d4a7aeaf4c5d"
  })
}

export default firebase 
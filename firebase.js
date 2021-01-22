import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB8vmXL_7hI50dIMzjxquwqnoVR0-Cqukc",
    authDomain: "linkedin-clone-yt-7abfe.firebaseapp.com",
    projectId: "linkedin-clone-yt-7abfe",
    storageBucket: "linkedin-clone-yt-7abfe.appspot.com",
    messagingSenderId: "958413782285",
    appId: "1:958413782285:web:b378312535980e4ac9c444"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth};
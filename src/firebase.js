import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_wmkeDMKnQWq47Jxd9ufCWr9MV6JKbII",
    authDomain: "discord-clone-30f58.firebaseapp.com",
    projectId: "discord-clone-30f58",
    storageBucket: "discord-clone-30f58.appspot.com",
    messagingSenderId: "275001437720",
    appId: "1:275001437720:web:7659d938b8f16859621d6d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
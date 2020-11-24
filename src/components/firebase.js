import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDQh7v-3xMnItRHn1mM19x6WhXRYTJmMAQ",
    authDomain: "slack-e9dd3.firebaseapp.com",
    databaseURL: "https://slack-e9dd3.firebaseio.com",
    projectId: "slack-e9dd3",
    storageBucket: "slack-e9dd3.appspot.com",
    messagingSenderId: "649677042345",
    appId: "1:649677042345:web:dd9ded1e9b17d089f12fb8",
    measurementId: "G-96T53FN7CJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjnYQxtIgqruM0TZKBbotK_vWVKf08_Ow",
    authDomain: "clone-c9ab1.firebaseapp.com",
    projectId: "clone-c9ab1",
    storageBucket: "clone-c9ab1.appspot.com",
    messagingSenderId: "1011883573626",
    appId: "1:1011883573626:web:1aeddc25fce49b75e416c3"
  
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
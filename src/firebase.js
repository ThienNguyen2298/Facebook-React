import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCLT8QE_k6rA5FlCZk-v0vvcb0TRhlt-u0",
    authDomain: "facebook-clone-c6298.firebaseapp.com",
    databaseURL: "https://facebook-clone-c6298.firebaseio.com",
    projectId: "facebook-clone-c6298",
    storageBucket: "facebook-clone-c6298.appspot.com",
    messagingSenderId: "339375864609",
    appId: "1:339375864609:web:f2e95deded3a96d5c59c60",
    measurementId: "G-JQJ29Q4E92"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db};
export default provider;
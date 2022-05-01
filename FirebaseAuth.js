// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3L3m8pILSSNy9QrmvdLGVblHsZzW5100",
  authDomain: "pbl5-bf8db.firebaseapp.com",
  projectId: "pbl5-bf8db",
  storageBucket: "pbl5-bf8db.appspot.com",
  messagingSenderId: "147361021967",
  appId: "1:147361021967:web:ab77e42bd77d28c127637a",
  measurementId: "G-H2RV8WXYGD"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/compat/app";
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB-AIby3aRJphlJT1hPrUkiN6WmUi1sg1Y",
  authDomain: "laststeam-924d5.firebaseapp.com",
  databaseURL: "https://laststeam-924d5-default-rtdb.firebaseio.com",
  projectId: "laststeam-924d5",
  storageBucket: "laststeam-924d5.appspot.com",
  messagingSenderId: "94454477369",
  appId: "1:94454477369:web:479e19f8e7c9b4dca013e8"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth()

export { 
    auth,
    firebase,
    firebaseApp
     }

export default db
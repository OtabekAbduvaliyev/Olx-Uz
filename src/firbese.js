// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARNcFyE62JLMY-ponkVWEli51Scc6blLY",
  authDomain: "sputnik-market.firebaseapp.com",
  projectId: "sputnik-market",
  storageBucket: "sputnik-market.appspot.com",
  messagingSenderId: "174446609035",
  appId: "1:174446609035:web:5b9297d8e81df1621c4a8e",
  measurementId: "G-FTHGLFYZ40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imgDB = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
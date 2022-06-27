// Import the functions you need from the SDKs you need'

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV7F56gk5V2rz1ldvawSsBnD0WOWyG-og",
  authDomain: "beherdfirebase.firebaseapp.com",
  projectId: "beherdfirebase",
  storageBucket: "beherdfirebase.appspot.com",
  messagingSenderId: "318498676382",
  appId: "1:318498676382:web:451582c5f1c9288b67a58f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

export {provider, auth};
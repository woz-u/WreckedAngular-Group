import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_parhI0taCRbXQWTnh1nfpwSnGhH5Xkg",
  authDomain: "lfgproject-35552.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "lfgproject-35552",
  storageBucket: "lfgproject-35552.appspot.com",
  messagingSenderId: "914079046657",
  appId: "1:914079046657:web:8ac99ba30bb1ed2fa6b400",
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: "G-MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
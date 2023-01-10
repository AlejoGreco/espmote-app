// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";

//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "espmote.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: "espmote",
  storageBucket: "espmote.appspot.com",
  messagingSenderId: "309598747416",
  appId: "1:309598747416:web:c322f28d76bf803cb17c6d",
  measurementId: "G-F1G4KEK6EP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
//const analytics = getAnalytics(app);


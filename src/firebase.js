// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPCaRxHjQ9AYaSX2XL2XHBfkCEH_LncIw",
  authDomain: "espmote.firebaseapp.com",
  databaseURL: "https://espmote-default-rtdb.firebaseio.com",
  projectId: "espmote",
  storageBucket: "espmote.appspot.com",
  messagingSenderId: "309598747416",
  appId: "1:309598747416:web:c322f28d76bf803cb17c6d",
  measurementId: "G-F1G4KEK6EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);


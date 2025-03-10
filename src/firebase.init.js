// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzzR6sD-34-rBtusL3Bjo65msYh4i5eA0",
  authDomain: "ecommercesite-72aed.firebaseapp.com",
  projectId: "ecommercesite-72aed",
  storageBucket: "ecommercesite-72aed.firebasestorage.app",
  messagingSenderId: "365313454170",
  appId: "1:365313454170:web:cb500627907c8f6cff6863",
  measurementId: "G-SMJHW46RQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
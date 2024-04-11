// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwh7QAdgk-0RTAZiNKuHs4j8ryEmibUCA",
  authDomain: "auth-moha-milon-71684.firebaseapp.com",
  projectId: "auth-moha-milon-71684",
  storageBucket: "auth-moha-milon-71684.appspot.com",
  messagingSenderId: "426429901614",
  appId: "1:426429901614:web:7f4fa7a37eb435601028bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
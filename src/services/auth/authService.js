// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Optionally import the services that you want to use
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt4CtKD3msgMd314ANxGQZjK5YT5AFYPc",
  authDomain: "fooddeliveryapp-fe60d.firebaseapp.com",
  projectId: "fooddeliveryapp-fe60d",
  storageBucket: "fooddeliveryapp-fe60d.appspot.com",
  messagingSenderId: "333051616644",
  appId: "1:333051616644:web:540406a62e1b5db68251d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginReq = async (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

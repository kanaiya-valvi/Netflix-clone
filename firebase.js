// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQcFflHxC1n0Z8hmPSqgRpYn60k-pbMb4",
  authDomain: "netflix-94ff5.firebaseapp.com",
  projectId: "netflix-94ff5",
  storageBucket: "netflix-94ff5.appspot.com",
  messagingSenderId: "649062262721",
  appId: "1:649062262721:web:6a7075220aafa2e8527140",
  measurementId: "G-GPP1Z1L6RM",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
export default app;
export { db, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaeXnMfyF2L7tt3MOOf4HG2fzp8TK566c",
  authDomain: "hunter-events-portal.firebaseapp.com",
  projectId: "hunter-events-portal",
  storageBucket: "hunter-events-portal.firebasestorage.app",
  messagingSenderId: "1003382121187",
  appId: "1:1003382121187:web:d7e28cbed79d5dd6511bd6",
  measurementId: "G-0V70Q1V3ES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };

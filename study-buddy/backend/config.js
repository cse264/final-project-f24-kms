require('dotenv').config();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvR_JRck0iJwo-futKeJTPYhi-2g1OuSU",
  authDomain: "kms-6287f.firebaseapp.com",
  databaseURL: "https://kms-6287f-default-rtdb.firebaseio.com",
  projectId: "kms-6287f",
  storageBucket: "kms-6287f.firebasestorage.app",
  messagingSenderId: "716058038214",
  appId: "1:716058038214:web:d259ae3cc198f3f9faacc7",
  measurementId: "G-JCRMQ31H7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
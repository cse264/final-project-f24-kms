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
  apiKey: process.env.FIREBASE_APIKEY, //"AIzaSyBvR_JRck0iJwo-futKeJTPYhi-2g1OuSU",
  authDomain: process.env.FIREBASE_AUTHDOMAIN, //"kms-6287f.firebaseapp.com",
  databaseURL: process.env.FIREBASE_DATABASEURL, //"https://kms-6287f-default-rtdb.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECTID, //"kms-6287f",
  storageBucket: process.env.FIREBASE_STORAGEBUCKET, //"kms-6287f.firebasestorage.app",
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID, //"716058038214",
  appId: process.env.FIREBASE_APPID, //"1:716058038214:web:d259ae3cc198f3f9faacc7",
  measurementId: process.env.FIREBASE_MEASUREMENTID //"G-JCRMQ31H7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
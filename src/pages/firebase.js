// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCue4L-QRwaxU3fKVpPhFzl27t3OnKvVc",
  authDomain: "incandescent-inferno-8989.firebaseapp.com",
  databaseURL: "https://incandescent-inferno-8989.firebaseio.com",
  projectId: "incandescent-inferno-8989",
  storageBucket: "incandescent-inferno-8989.appspot.com",
  messagingSenderId: "1046235333283",
  appId: "1:1046235333283:web:a145d18e7eae4632cab516"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()

export { app, db }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6lcNMMqW9dm8kVznPLI2AMexhs-QWMFo",
  authDomain: "spotifydemo-3abdb.firebaseapp.com",
  projectId: "spotifydemo-3abdb",
  storageBucket: "spotifydemo-3abdb.appspot.com",
  messagingSenderId: "860559974232",
  appId: "1:860559974232:web:67d278d3f7c64d48be0f2d",
  measurementId: "G-Z6S82TSCQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
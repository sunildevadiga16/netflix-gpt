// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN23IMDJChmrXLkSsKOYohs0Xvv3AazpY",
  authDomain: "netflix-gpt-d14e9.firebaseapp.com",
  projectId: "netflix-gpt-d14e9",
  storageBucket: "netflix-gpt-d14e9.appspot.com",
  messagingSenderId: "510254544706",
  appId: "1:510254544706:web:a64145231079f77441fadb",
  measurementId: "G-QNJGDGECFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
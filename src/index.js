// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIM8zMLPACwbGrc8VUCOrrzil6Bvl7AEE",
  authDomain: "formyshim.firebaseapp.com",
  projectId: "formyshim",
  storageBucket: "formyshim.appspot.com",
  messagingSenderId: "183329729662",
  appId: "1:183329729662:web:c80a8f509ee4dd0aa2bc2f",
  measurementId: "G-8XPXDJMX84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);
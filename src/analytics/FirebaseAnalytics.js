// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg4Vvyk-JZvuigcCEikQYOG08k2tbZdwo",
  authDomain: "wedding-site-106a8.firebaseapp.com",
  projectId: "wedding-site-106a8",
  storageBucket: "wedding-site-106a8.appspot.com",
  messagingSenderId: "641390355622",
  appId: "1:641390355622:web:f25524a2406d47787f8067",
  measurementId: "G-2EKR1536ND"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(firebaseApp);

// Expose logging API
function logAnalytics(metricName) {
  console.log("Logged metric: " + metricName)
  logEvent(firebaseAnalytics, metricName)
}

export default logAnalytics;
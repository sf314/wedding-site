import logo from './logo.svg';
import './App.css';

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

function App() {
  function logClick() {
    console.log("Clicked!")
    logEvent(firebaseAnalytics, "page_load_main")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={logClick}>
          Click me!
        </button>
      </header>
    </div>
  );
}

export default App;

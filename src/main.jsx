import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDknDSkC9gKU9phgFVURpcVT40JzKvdPuA",
  authDomain: "react-hccc.firebaseapp.com",
  projectId: "react-hccc",
  storageBucket: "react-hccc.appspot.com",
  messagingSenderId: "575143978771",
  appId: "1:575143978771:web:c7685c8e7de8b6cf465ce6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

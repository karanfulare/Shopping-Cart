import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhvogbJN1w5jc85MUKewiUDcvr90rpA80",
  authDomain: "cart-ee49e.firebaseapp.com",
  projectId: "cart-ee49e",
  storageBucket: "cart-ee49e.appspot.com",
  messagingSenderId: "658421840544",
  appId: "1:658421840544:web:938a1a1b4e617ed02127c5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


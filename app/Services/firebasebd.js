import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAZ1rxxnRwDSZ0py9QKyNkqX9Z7jt8S-Io",
  authDomain: "circuithouse-5001d.firebaseapp.com",
  databaseURL: "https://circuithouse-5001d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "circuithouse-5001d",
  storageBucket: "circuithouse-5001d.appspot.com",
  messagingSenderId: "790685577595",
  appId: "1:790685577595:web:b66d8b470f9bff19c28dde",
  measurementId: "G-VMTBKENDLY"

});

const db = firebase.firestore();

export default db;
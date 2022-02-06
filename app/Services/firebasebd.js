import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAZ1rxxnRwDSZ0py9QKyNkqX9Z7jt8S-Io",
  authDomain: "circuithouse-5001d.firebaseapp.com",
  projectId: "circuithouse-5001d",

});

const db = firebase.firestore();

export default db;
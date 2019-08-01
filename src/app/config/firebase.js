import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBZ4FOT8ZHOYmn7IXMHcH9Oi3vtgWsoamg",
    authDomain: "revents-5be0d.firebaseapp.com",
    databaseURL: "https://revents-5be0d.firebaseio.com",
    projectId: "revents-5be0d",
    storageBucket: "revents-5be0d.appspot.com",
    messagingSenderId: "633055395603",
    appId: "1:633055395603:web:300f0b47ef3b6e37"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
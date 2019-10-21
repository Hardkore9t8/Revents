import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDk4JIjy6OJELGqQ6wp8LueDIhZNj1X8YY",
  authDomain: "revents-2.firebaseapp.com",
  databaseURL: "https://revents-2.firebaseio.com",
  projectId: "revents-2",
  storageBucket: "revents-2.appspot.com",
  messagingSenderId: "17117034641",
  appId: "1:17117034641:web:c7360e00bf956729"
};

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4ybvb6AUCq8A4mmd0YB2Uw_6JI2DFnp4",
    authDomain: "react-abraham-7a45c.firebaseapp.com",
    databaseURL: "https://react-abraham-7a45c.firebaseio.com",
    projectId: "react-abraham-7a45c",
    storageBucket: "react-abraham-7a45c.appspot.com",
    messagingSenderId: "780927790596",
    appId: "1:780927790596:web:3ad8d04cbb5e6053478f51"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
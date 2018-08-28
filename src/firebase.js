import firebase from 'firebase'
import 'firebase/firestore'


const config = {
    apiKey: "AIzaSyCktRuffcnSC8HV-qsj5JIfGAHIH6WPTHo",
    authDomain: "imarvinified.firebaseapp.com",
    databaseURL: "https://imarvinified.firebaseio.com",
    projectId: "imarvinified",
    storageBucket: "imarvinified.appspot.com",
    messagingSenderId: "866926024270"
  };

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const cloudstore = firebase.storage()

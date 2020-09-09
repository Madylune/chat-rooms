import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyABrFCQSJz9_Pt74JlNNrJn-0-8fLTF2ck",
  authDomain: "chat-c5a1b.firebaseapp.com",
  databaseURL: "https://chat-c5a1b.firebaseio.com",
  projectId: "chat-c5a1b",
  storageBucket: "chat-c5a1b.appspot.com",
  messagingSenderId: "192394678210",
  appId: "1:192394678210:web:a1fec82d3182705707d05b",
  measurementId: "G-NK798QJTRN"
}

firebase.initializeApp(FIREBASE_CONFIG)

export const auth = firebase.auth
export const db = firebase.database()
import firebase from "firebase/app"
import "firebase/auth"
import '@firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyD-Sb3msmJQEkOoMK_Mu2ZzUkjBwccmiuk",
  authDomain: "prueba-tecnica-fe343.firebaseapp.com",
  projectId: "prueba-tecnica-fe343",
  storageBucket: "prueba-tecnica-fe343.appspot.com",
  messagingSenderId: "209772558128",
  appId: "1:209772558128:web:60ceffdc4d4a4e08327af5",
  measurementId: "G-2GPHQYYE49"
})


export const auth = app.auth()
export default app

export const db= firebase.firestore();


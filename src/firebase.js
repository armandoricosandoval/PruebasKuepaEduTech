import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDKq1xApzsVH2efHRVjikjKVQU9zR5xcPA",
    authDomain: "talentos-itesa.firebaseapp.com",
    databaseURL: "https://talentos-itesa.firebaseio.com",
    projectId: "talentos-itesa",
    storageBucket: "talentos-itesa.appspot.com",
    messagingSenderId: "173103881018",
    appId: "1:173103881018:web:ab28cb980b81c1ddb78e03",
    measurementId: "G-3S797XTHYK"
})

export const auth = app.auth()
export default app


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvCZrYWEZa7yto1Q_IZ8Jo8EzdLgGsVqE",
  authDomain: "disneyplus-clone-c7296.firebaseapp.com",
  projectId: "disneyplus-clone-c7296",
  storageBucket: "disneyplus-clone-c7296.appspot.com",
  messagingSenderId: "165718095510",
  appId: "1:165718095510:web:ccafd7b447552644beb4b7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

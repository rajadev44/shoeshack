// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




const firebaseConfig = {
  apiKey: "AIzaSyChGHIXHlLAJU2q0SY_FWRpcNJoLXRi_Mc",
  authDomain: "hello-aae97.firebaseapp.com",
  projectId: "hello-aae97",
  storageBucket: "hello-aae97.appspot.com",
  messagingSenderId: "811833272056",
  appId: "1:811833272056:web:deb16025f960f51798bd0d"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
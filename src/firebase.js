// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnia8FPJenYxWPIfQ8i7HLzYSpyOxSpuE",
  authDomain: "authg-19497.firebaseapp.com",
  projectId: "authg-19497",
  storageBucket: "authg-19497.appspot.com",
  messagingSenderId: "29541973759",
  appId: "1:29541973759:web:d3e0940642351e9705d6ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
export {auth};
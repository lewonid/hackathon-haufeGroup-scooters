// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBK3rxEevvdO6SIXHV0_10JT2xL_rwX2E",
  authDomain: "hackathon-haufegroup.firebaseapp.com",
  projectId: "hackathon-haufegroup",
  storageBucket: "hackathon-haufegroup.appspot.com",
  messagingSenderId: "996986522429",
  appId: "1:996986522429:web:4ded587d245d43e3a25354",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };

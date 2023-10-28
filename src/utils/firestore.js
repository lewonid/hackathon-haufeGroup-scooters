import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

export { db };

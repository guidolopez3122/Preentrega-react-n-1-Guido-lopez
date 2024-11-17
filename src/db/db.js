import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVpfcRd05FDUn9AoLep0f1TvpHiaDBwjk",
  authDomain: "proyecto-final-guido-lopez.firebaseapp.com",
  projectId: "proyecto-final-guido-lopez",
  storageBucket: "proyecto-final-guido-lopez.firebasestorage.app",
  messagingSenderId: "538907752183",
  appId: "1:538907752183:web:f548b652e0b4584cb2c5f2"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db
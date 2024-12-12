// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase"; // A Firestore exportálva van a firebase.js-ből
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCi7c2pGrjQnu7YHg2NtBv4Qa8nsp2Xnc",
  authDomain: "pvp-game-e2199.firebaseapp.com",
  projectId: "pvp-game-e2199",
  storageBucket: "pvp-game-e2199.firebasestorage.app",
  messagingSenderId: "933923268678",
  appId: "1:933923268678:web:de0b7478ada93db6834247"
};


export const hello = () => {
    console.log('anyád')
}
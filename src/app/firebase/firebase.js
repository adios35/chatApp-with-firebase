// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { , } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzVIr6iijaMqt8qTa_BoGabbFQSRU7XR0",
  authDomain: "chatapp-1a29a.firebaseapp.com",
  projectId: "chatapp-1a29a",
  storageBucket: "chatapp-1a29a.appspot.com",
  messagingSenderId: "1090165672887",
  appId: "1:1090165672887:web:618b5c4ee55ad6dadcf632",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore(app);

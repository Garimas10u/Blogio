// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "blogio-87964.firebaseapp.com",
  projectId: "blogio-87964",
  storageBucket: "blogio-87964.firebasestorage.app",
  messagingSenderId: "162747847309",
  appId: "1:162747847309:web:9652431924da2a482848c4",
  measurementId: "G-W15Z6SQ6CB"
};


const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
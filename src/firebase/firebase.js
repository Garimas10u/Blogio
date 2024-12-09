
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "blogio-10u.firebaseapp.com",
  projectId: "blogio-10u",
  storageBucket: "blogio-10u.firebasestorage.app",
  messagingSenderId: "492685140070",
  appId: "1:492685140070:web:ae29d8e34651552fa4cda7",
  measurementId: "G-CL8R11WZWY"
};


const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
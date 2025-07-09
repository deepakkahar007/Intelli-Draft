// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR9kQ-iAMmjuHEzssrsXs230JCaGtHKVc",
  authDomain: "notion-clone-c9266.firebaseapp.com",
  projectId: "notion-clone-c9266",
  storageBucket: "notion-clone-c9266.firebasestorage.app",
  messagingSenderId: "42290758866",
  appId: "1:42290758866:web:2a893ddfeee50c4598190b",
  measurementId: "G-6587C842S3",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db, analytics };

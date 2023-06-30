import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "connectify-79301.firebaseapp.com",
  projectId: "connectify-79301",
  storageBucket: "connectify-79301.appspot.com",
  messagingSenderId: "441814169066",
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-0FH5MQ0CVX"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
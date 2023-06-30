import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOlYo0egl9UO6SYWnj2EJDE2oZnWvQ310",
  authDomain: "connectify-79301.firebaseapp.com",
  projectId: "connectify-79301",
  storageBucket: "connectify-79301.appspot.com",
  messagingSenderId: "441814169066",
  appId: "1:441814169066:web:0b1c5190b6d998b2abae93",
  measurementId: "G-0FH5MQ0CVX"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
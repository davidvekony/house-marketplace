import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOj3_g638PQbzTXzrOl_dKrL_lBZvZiwE",
  authDomain: "house-marketplace-app-b8eaa.firebaseapp.com",
  projectId: "house-marketplace-app-b8eaa",
  storageBucket: "house-marketplace-app-b8eaa.appspot.com",
  messagingSenderId: "1038311025360",
  appId: "1:1038311025360:web:24677dc75b975113e1ccd5",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "whatapp-react-56426.firebaseapp.com",
  projectId: "whatapp-react-56426",
  storageBucket: "whatapp-react-56426.appspot.com",
  messagingSenderId: "464096034451",
  appId: "1:464096034451:web:29e9129dc7b3e563939766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
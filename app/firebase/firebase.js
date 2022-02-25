
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACvvjvc_KEAVthBVjUrOwtT6058_EWb9Q",
  authDomain: "uber--eats.firebaseapp.com",
  projectId: "uber--eats",
  storageBucket: "uber--eats.appspot.com",
  messagingSenderId: "840029004151",
  appId: "1:840029004151:web:f5c0b1c2e190c0af814172",
  measurementId: "G-87YK16V847"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
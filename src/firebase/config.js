import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0xx9XOpHdvUgqUTOpEmrxgHYSu8Nuv90",
  authDomain: "uploadimagesinreact.firebaseapp.com",
  projectId: "uploadimagesinreact",
  storageBucket: "uploadimagesinreact.appspot.com",
  messagingSenderId: "901000208509",
  appId: "1:901000208509:web:5be5e0d2ff2e400cc85114",
  measurementId: "G-2PGDR9ZBYT",
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore();
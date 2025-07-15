// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "shortlyai-34335.firebaseapp.com",
  projectId: "shortlyai-34335",
  storageBucket: "shortlyai-34335.firebasestorage.app",
  messagingSenderId: "492356375554",
  appId: "1:492356375554:web:f70aa27cd066d11f88c31b",
  measurementId: "G-RK595ZKHPQ"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

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
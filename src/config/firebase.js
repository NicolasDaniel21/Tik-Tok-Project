
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBuq7KXipsSVxZi98tXJrH2HoHEPx2c5Tk",
  authDomain: "tiktok---jornada-6717f.firebaseapp.com",
  projectId: "tiktok---jornada-6717f",
  storageBucket: "tiktok---jornada-6717f.appspot.com",
  messagingSenderId: "867106833183",
  appId: "1:867106833183:web:ff1ff306a27824ce1fa62a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
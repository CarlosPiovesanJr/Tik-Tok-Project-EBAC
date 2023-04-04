import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBcTAg0f-CrISOHlZ57VZaZmg8FGcem0gU",
  authDomain: "tiktok---jornadadev-b3395.firebaseapp.com",
  projectId: "tiktok---jornadadev-b3395",
  storageBucket: "tiktok---jornadadev-b3395.appspot.com",
  messagingSenderId: "268758843528",
  appId: "1:268758843528:web:46679a9d802b2c6ecb9f3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

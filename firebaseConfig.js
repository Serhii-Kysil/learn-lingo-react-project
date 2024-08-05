import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_SOME_KEY,
  authDomain: "learn-lingo-ad84f.firebaseapp.com",
  projectId: "learn-lingo-ad84f",
  storageBucket: "learn-lingo-ad84f.appspot.com",
  messagingSenderId: "563516086482",
  appId: "1:563516086482:web:3b9e109775cd18e30df50b",
  measurementId: "G-R1XGV9NSP6",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getDatabase(app);

export { auth, database };

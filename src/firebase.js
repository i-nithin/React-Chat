import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDNIt0298haRQK98L7KuSKzdQsrXZfADOQ",
  authDomain: "react-chat-a3e29.firebaseapp.com",
  projectId: "react-chat-a3e29",
  storageBucket: "react-chat-a3e29.appspot.com",
  messagingSenderId: "806912094834",
  appId: "1:806912094834:web:da859ab2941286d0e6c8eb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const  db = getFirestore(app)
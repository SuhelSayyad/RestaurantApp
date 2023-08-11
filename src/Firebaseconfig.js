// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDPwdfBwj2o7vZ7sVigXzvaqsCWTeuX_ac",
  authDomain: "restoapp-93920.firebaseapp.com",
  projectId: "restoapp-93920",
  storageBucket: "restoapp-93920.appspot.com",
  messagingSenderId: "253285127748",
  appId: "1:253285127748:web:e82b81a044fb46060ace11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)
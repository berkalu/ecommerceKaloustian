// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1wsG0DIsGJNu8sllrgqrb3HyrDf7Ckm0",
  authDomain: "ecommerce-kaloustian.firebaseapp.com",
  projectId: "ecommerce-kaloustian",
  storageBucket: "ecommerce-kaloustian.appspot.com",
  messagingSenderId: "966607600458",
  appId: "1:966607600458:web:298c86a8efe7f193d49fb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
  
export default db
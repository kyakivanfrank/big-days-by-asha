// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO9VE3W1jrm-XjSg4U_LKHqFRy_h9RR6w",
  authDomain: "big-days-by-asha-99224.firebaseapp.com",
  projectId: "big-days-by-asha-99224",
  storageBucket: "big-days-by-asha-99224.appspot.com",
  messagingSenderId: "141723268523",
  appId: "1:141723268523:web:e4435d581414f682b54eee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export default app;

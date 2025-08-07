// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHPYZcizMxhqsIL3ZWwKCBAiqx8ZWRLvY",
  authDomain: "settlekar-6996b.firebaseapp.com",
  projectId: "settlekar-6996b",
  storageBucket: "settlekar-6996b.firebasestorage.app",
  messagingSenderId: "1066822040792",
  appId: "1:1066822040792:web:01502badcd6d4215056bad",
  measurementId: "G-V69LG6V4ZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { db };
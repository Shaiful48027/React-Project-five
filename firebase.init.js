import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMQ9uNspInWHcqSgNRjdMBpDR3o0aBkvM",
  authDomain: "login-with-react-five.firebaseapp.com",
  projectId: "login-with-react-five",
  storageBucket: "login-with-react-five.firebasestorage.app",
  messagingSenderId: "1097152922388",
  appId: "1:1097152922388:web:9b4c0af6e57fb6f0e8b801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);






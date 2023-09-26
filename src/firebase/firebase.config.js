// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl40iXMtc-puDa7MvXB61BCId70HY459U",
  authDomain: "auth-moha-milon.firebaseapp.com",
  projectId: "auth-moha-milon",
  storageBucket: "auth-moha-milon.appspot.com",
  messagingSenderId: "37078255594",
  appId: "1:37078255594:web:2c75363b6759d3239f9493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
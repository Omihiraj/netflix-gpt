// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlBQxLG6hMxgpn_2qLeLUJNBhI-ZFmxsY",
    authDomain: "netflix-gpt-85219.firebaseapp.com",
    projectId: "netflix-gpt-85219",
    storageBucket: "netflix-gpt-85219.appspot.com",
    messagingSenderId: "603006187948",
    appId: "1:603006187948:web:4194bd5ed093482ac0a209",
    measurementId: "G-XT7EL5NXRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAW9UwTsAl3YpDJFCnMM5PiuSXev-YFNY0",
    authDomain: "javaquiz-2f7ab.firebaseapp.com",
    projectId: "javaquiz-2f7ab",
    storageBucket: "javaquiz-2f7ab.appspot.com",
    messagingSenderId: "212951828351",
    appId: "1:212951828351:web:8c4877971103e87874fc4a",
    measurementId: "G-VQWLW60YG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
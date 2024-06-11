// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2XAclT9cP8CbXULC-_lfn8XPIWZhsnG4",
  authDomain: "websit-f577a.firebaseapp.com",
  projectId: "websit-f577a",
  storageBucket: "websit-f577a.appspot.com",
  messagingSenderId: "215571823901",
  appId: "1:215571823901:web:9a75d215d98a3cdd63f5f4",
  measurementId: "G-WNM5EDM96J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
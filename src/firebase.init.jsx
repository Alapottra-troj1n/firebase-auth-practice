// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQskTkB-9fViBEa3Rf_NErXrYHfvZmZ9g",
  authDomain: "router-firebase-58e31.firebaseapp.com",
  projectId: "router-firebase-58e31",
  storageBucket: "router-firebase-58e31.appspot.com",
  messagingSenderId: "686560219703",
  appId: "1:686560219703:web:30b744361ede34a797a5b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
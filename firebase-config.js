// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMi4S-JrwqT8DLMYjUvPMUgOZ_f02EDeI",
  authDomain: "culinera-recipes.firebaseapp.com",
  projectId: "culinera-recipes",
  storageBucket: "culinera-recipes.firebasestorage.app",
  messagingSenderId: "642219261914",
  appId: "1:642219261914:web:f621b8581a4f0791694ae3",
  measurementId: "G-LJTE9X1C99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

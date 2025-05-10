// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration loaded from environment variables
const firebaseConfig = {
  apiKey: "AIzaSyCfA_-PJU1pb3qDMWuHk-sl0H85dpOJS40",
  authDomain: "vernecipe.firebaseapp.com",
  projectId: "vernecipe",
  storageBucket: "vernecipe.firebasestorage.app",
  messagingSenderId: "317986656278",
  appId: "1:317986656278:web:034899fc23050432cb2537",
  measurementId: "G-XBSPY8BW68"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };

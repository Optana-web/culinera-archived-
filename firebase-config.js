// firebase-config.js

// This file assumes you have already loaded the Firebase compat scripts in your HTML:
// <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
// (add storage-compat.js, analytics-compat.js, etc. if you use those features)

const firebaseConfig = {
  apiKey: "AIzaSyCMi4S-JrwqT8DLMYjUvPMUgOZ_f02EDeI",
  authDomain: "culinera-recipes.firebaseapp.com",
  projectId: "culinera-recipes",
  storageBucket: "culinera-recipes.appspot.com",
  messagingSenderId: "64221926914",
  appId: "1:64221926914:web:f621b8581a4f0791694ae3",
  measurementId: "G-LJTEX9XC99"
};

// Only initialize once, even if this file is loaded multiple times
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

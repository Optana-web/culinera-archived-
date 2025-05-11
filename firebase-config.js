// firebase-config.js

// This file assumes you have already loaded the Firebase compat scripts in your HTML:
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js"></script>
// (add storage-compat.js, analytics-compat.js, etc. if you use those features)

const firebaseConfig = {
  apiKey: "AIzaSyA_CZn_fLuzyBoWCqKxI0SHPalTGBaLIGc",
  authDomain: "optanav1.firebaseapp.com",
  projectId: "optanav1",
  storageBucket: "optanav1.firebasestorage.app",
  messagingSenderId: "16298669202",
  appId: "1:16298669202:web:ac2a1cd399993b1883624b",
  measurementId: "G-RR7D4MB5FY"
};

// Only initialize once, even if this file is loaded multiple times
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

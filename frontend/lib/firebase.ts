import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVsrO7MKl-tjqBBZKhxrmSO4nWAf186Cc",
  authDomain: "final-year-nit.firebaseapp.com",
  projectId: "final-year-nit",
  storageBucket: "final-year-nit.appspot.com",
  messagingSenderId: "637146673103",
  appId: "1:637146673103:web:05099148e8939b228becba",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  //   if (!/already exists/.test(err.message)) {
  //     console.error("Firebase initialization error", err.stack);
  //   }
}

export default firebase;

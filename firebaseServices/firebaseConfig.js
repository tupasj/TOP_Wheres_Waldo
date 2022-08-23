import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8K9lXVZa-q4Bm9HoqTAoZpHCVjny5DWg",
  authDomain: "wheres-waldo-3e477.firebaseapp.com",
  projectId: "wheres-waldo-3e477",
  storageBucket: "wheres-waldo-3e477.appspot.com",
  messagingSenderId: "208229446984",
  appId: "1:208229446984:web:0f2d4ad021bd10f035ef7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { firebaseConfig, app };
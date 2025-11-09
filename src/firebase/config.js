import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBLB_lcZXvF0PTOmcdBTNz6ksJfXbSwgQw",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "famwell-551bc.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "famwell-551bc",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "famwell-551bc.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "325951293831",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:325951293831:web:3c29ee2603b76203116b22",
};

let app;
let auth;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  console.log('✅ Firebase initialized successfully');
} catch (error) {
  console.error('❌ Firebase initialization failed:', error);
  throw error;
}

export { app, auth };

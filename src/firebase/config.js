import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyD6ZV11_BFrLPyQxKSx2brhEck1fghlQAo",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "famwellplus-auth.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "famwellplus-auth",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "famwellplus-auth.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "240452476147",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:240452476147:web:05b96a3fdbc2ba9aa16b86",
};

// Validate config before initializing
const missingFields = Object.entries(firebaseConfig)
  .filter(([key, value]) => !value)
  .map(([key]) => key);

if (missingFields.length > 0) {
  console.error('❌ Missing Firebase config fields:', missingFields);
  alert(`Firebase configuration error: Missing ${missingFields.join(', ')}`);
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

console.log('✅ Firebase initialized successfully');
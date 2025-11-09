import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6ZV11_BFrLPyQxKSx2brhEck1fghlQAo",
  authDomain: "famwellplus-auth.firebaseapp.com",
  projectId: "famwellplus-auth",
  storageBucket: "famwellplus-auth.firebasestorage.app",
  messagingSenderId: "240452476147",
  appId: "1:240452476147:web:05b96a3fdbc2ba9aa16b86",
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
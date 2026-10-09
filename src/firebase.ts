import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration for Gradly
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCNdQOBi9e4hEJnmVyRZeOQo9FxWeF0ioQ",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "gradly-f79d9.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "gradly-f79d9",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "gradly-f79d9.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "379093129064",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:379093129064:web:a9281996088952c3fca8dd",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-7Q4WL3NJ8B"
};

// Initialize Firebase App singleton
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firebase Services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Safe Analytics initialization for browser environments
export const getSafeAnalytics = async () => {
  if (typeof window !== "undefined" && (await isSupported())) {
    return getAnalytics(app);
  }
  return null;
};

// Auto-initialize analytics in supported environments
if (typeof window !== "undefined") {
  getSafeAnalytics().catch(() => {
    // Analytics not supported or blocked (e.g. adblocker)
  });
}

export default app;

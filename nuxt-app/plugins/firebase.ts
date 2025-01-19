import { defineNuxtPlugin } from "#app";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB-bgqBdPixAeb4Eu4OdS4oU-dp8UoZBdQ",
  authDomain: "nuxt3login.firebaseapp.com",
  projectId: "nuxt3login",
  storageBucket: "nuxt3login.appspot.com",
  messagingSenderId: "327088996915",
  appId: "1:327088996915:web:95375be991f5293308d946",
  measurementId: "G-7L2JD1XLYE",
};

// Firebase uygulamasını başlat veya var olanı kullan
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Plugin olarak tanımla
export default defineNuxtPlugin(() => {
  return {
    provide: {
      firebaseAuth: auth,
      firebaseDb: db,
    },
  };
});

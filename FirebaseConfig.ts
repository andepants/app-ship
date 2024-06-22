// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHc7z3aNyKnIzCsuYk3K2uCx-_1kUc-zk",
  authDomain: "app-ship-425920.firebaseapp.com",
  projectId: "app-ship-425920",
  storageBucket: "app-ship-425920.appspot.com",
  messagingSenderId: "892810353561",
  appId: "1:892810353561:web:74028ea59d8f38cac35108"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
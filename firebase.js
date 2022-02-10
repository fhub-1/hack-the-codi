// Import the functions you need from the SDKs you need
import { initializeApp,getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjrhdjzr6_1uQiKvea8sY5ZJZZL97Z2wU",
  authDomain: "hcode-f9934.firebaseapp.com",
  projectId: "hcode-f9934",
  storageBucket: "hcode-f9934.appspot.com",
  messagingSenderId: "310084814235",
  appId: "1:310084814235:web:edeb01cc95ec29f69e4d3e"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};
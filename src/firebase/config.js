// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAebN4EZbY0dgHv6MuUEq10gGtcMUdXe2k',
  authDomain: 'vue-live-chat-1623e.firebaseapp.com',
  projectId: 'vue-live-chat-1623e',
  storageBucket: 'vue-live-chat-1623e.firebasestorage.app',
  messagingSenderId: '100719649527',
  appId: '1:100719649527:web:b116c06a65f32e892769f2',
  measurementId: 'G-4LY3FCSN03',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

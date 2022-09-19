// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCM21eVpS-ePbI82K-c7LGp2uHNOiFOKr0',
  authDomain: 'cea-remote.firebaseapp.com',
  projectId: 'cea-remote',
  storageBucket: 'cea-remote.appspot.com',
  messagingSenderId: '147064427837',
  appId: '1:147064427837:web:0077ea94583841016f6154',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

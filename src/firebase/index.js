import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: 'AIzaSyBlPQOC_SnFIo6rvbtOZbqFEnBVadlH81I',
    authDomain: 'todoappunivov.firebaseapp.com',
    projectId: 'todoappunivov',
    storageBucket: 'todoappunivov.appspot.com',
    messagingSenderId: '83042428033',
    appId: '1:83042428033:web:30e49107a1a99497d99980'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export { db }
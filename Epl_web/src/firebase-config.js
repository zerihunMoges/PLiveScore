import { initializeApp } from 'firebase/app'
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAgYvTqW1vtyZfMEa8ODDcYA-XJrpl7Mns',
  authDomain: 'eplnews-3b5e3.firebaseapp.com',
  projectId: 'eplnews-3b5e3',
  storageBucket: 'eplnews-3b5e3.appspot.com',
  messagingSenderId: '825038876470',
  appId: '1:825038876470:web:5f5b2e205135347bde8d97',
  measurementId: 'G-XXV7668HJ1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
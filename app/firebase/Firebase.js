// Import the functions you need from the SDKs you need
import {initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
const app = initializeApp({
	apiKey: process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_REACT_APP_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_REACT_APP_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_REACT_APP_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_REACT_APP_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_REACT_APP_MEASUREMENT_ID,
});
const db = getFirestore(app);
const auth = getAuth(app);

export {db, app, auth };
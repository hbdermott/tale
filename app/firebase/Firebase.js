// Import the functions you need from the SDKs you need
import {initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase

const firebaseConfig = {
	apiKey: ***REMOVED***,
	authDomain: ***REMOVED***,
	projectId: ***REMOVED***,
	storageBucket: ***REMOVED***,
	messagingSenderId: ***REMOVED***,
	appId: ***REMOVED***,
	measurementId: ***REMOVED***,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, app, auth };
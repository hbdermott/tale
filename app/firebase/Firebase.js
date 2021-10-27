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
	apiKey: "AIzaSyAlAXeaFjfr1AU8FFgg4AFioOaf14JDjmQ",
	authDomain: "novel-42fa8.firebaseapp.com",
	projectId: "novel-42fa8",
	storageBucket: "novel-42fa8.appspot.com",
	messagingSenderId: "56976936170",
	appId: "1:56976936170:web:604dc74a5e406b52965b93",
	measurementId: "G-6WNP8D4Y2Y",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, app, auth };
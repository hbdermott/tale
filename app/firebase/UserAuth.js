import { useState, useEffect } from "react";
import { auth } from "./Firebase";
import {signInWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithCredential, OAuthProvider, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, linkWithCredential} from "firebase/auth"

const formatUser = (user) => ({
	uid: user.uid,
	email: user.email,
	name: user.displayName,
	photo: user.photoURL
});

export default function useFirebaseAuth() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const authStateChanged = async (authState) => {
		if (!authState) {
			setUser(null);
			setLoading(false);
			return;
		}

		setLoading(true);
		var formattedUser = formatUser(authState);
		setUser(formattedUser);
		setLoading(false);
	};

	const loginWithProvider = async (provider) => {
		try{
			const res = await signInWithPopup(auth, new provider())
			const credential = provider.credentialFromResult(res);
			const token = credential.accessToken;
			const user = res.user;

		} catch(error){
			if (error.code === 'auth/account-exists-with-different-credential') {
				console.log("here")
				const pendingCred = error.credential;
				const email = error.email;
				// const methods = await fetchSignInMethodsForEmail(auth, user.email)
				// if(methods[0] === "password"){

				// }
				return {link: true, main: GoogleAuthProvider, cred: pendingCred}
				// const result = await signInWithPopup(auth, new GoogleAuthProvider())
				
			}
		}
	}

	const linkProvider = async (credential) => {
		const prevUser = auth.currentUser;
		const result = signInWithCredential(auth, credential)
		const cred = OAuthProvider.credentialFromResult(result);
		const link = await linkWithCredential(prevUser, cred)
	}

	const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

	const logout = () => {
		signOut(auth)
		setUser(null)
		setLoading(true)
	}

	// listen for Firebase state change
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, authStateChanged);
		return () => unsubscribe();
	}, []);

	return {
		user,
		loading,
		login,
		loginWithProvider,
		linkProvider,
		logout
	};
}

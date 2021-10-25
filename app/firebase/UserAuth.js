import { useState, useEffect } from "react";
import { auth } from "./Firebase";
import {signInWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithPopup, signOut} from "firebase/auth"

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
				// const pendingCred = error.credential;
				// const email = error.email;
				// const methods = await fetchSignInMethodsForEmail(auth, email)
				// const result = await signInWithPopup(auth, provider)
				// const link = await linkWithCredential(auth.currentUser, pendingCred)
			}
		}
	}

	const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

	const logout = () => {
		signOut(auth)
		setUser(null)
		setLoading(true)
	}

	// listen for Firebase state change
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(authStateChanged);
		return () => unsubscribe();
	}, []);

	return {
		user,
		loading,
		login,
		loginWithProvider,
		logout
	};
}

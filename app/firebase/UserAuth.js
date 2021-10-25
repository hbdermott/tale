import { useState, useEffect } from "react";
import { auth } from "./Firebase";
import {signInWithEmailAndPassword, signOut} from "firebase/auth"

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

	const loginWithProvider = (provider) => {
		signInWithPopup(auth, new provider())
			.then((result) => {
				// This gives you a GitHub Access Token. You can use it to access the GitHub API.
				const credential = provider.credentialFromResult(result);
				const token = credential.accessToken;

				// The signed-in user info.
				const user = result.user;
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = provider.credentialFromError(error);
				// ...
			});
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

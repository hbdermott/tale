import { createContext, useContext } from "react";
import useFirebaseAuth from "../app/firebase/UserAuth";

const userContext = createContext({
	user: null,
	loading: true,
	login: async () => {},
	loginWithProvider: async () => {},
	linkProvider: async () => {},
	logout: async () => {},
});

export function UserProvider({ children }) {
	const auth = useFirebaseAuth();
	return (
		<userContext.Provider value={auth}>{children}</userContext.Provider>
	);
}

export const useAuth = () => useContext(userContext);

import { createContext, useContext } from "react";
import useFirebaseAuth from "../app/firebase/UserAuth";

const firebaseContext = createContext({
	app: null,
	db: null,
	auth: null,
});

export function UserProvider({ children }) {
	const auth = useFirebaseAuth();
	return <firebaseContext.Provider value={auth}>{children}</firebaseContext.Provider>;
}

export const useFirebase = () => useContext(firebaseContext);

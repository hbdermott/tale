import { doc, getDoc } from "firebase/firestore";
import { db } from "../app/firebase/Firebase";

export const fetchUserData = async (userID) => {
	if (!userID) throw new Error("User ID is required");
	const query = await getDoc(doc(db, "userData", userID));
	if (query.exists()) return query.data();
    throw new Error("User not found");
};
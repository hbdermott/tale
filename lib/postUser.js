import { doc, setDoc } from "firebase/firestore";
import { db } from "../app/firebase/Firebase";

export const postUserData = async (userID, data) => {
    if (!userID) throw new Error("User ID is required");
    await setDoc(doc(db, "userData", userID), data, { merge: true });
}
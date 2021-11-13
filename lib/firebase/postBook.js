import { addDoc, collection, doc, setDoc} from "@firebase/firestore";
import { db } from "../../app/firebase/Firebase";

export const postBookDetails = async (details, user, bookID) => {
	const bookDetailsRef = await setDoc(doc(db, "bookDetails", bookID), {
		title: details.title,
		description: details.description,
		genres: details.genres,
        author: user.name,
		authorID: user.uid,
		likes: 0,
	});
};

export const postBook = async (content) => {
	const bookRef = await addDoc(collection(db, "books"), {
		content: content,
	});
};

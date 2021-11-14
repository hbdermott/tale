import { addDoc, collection, doc, setDoc} from "@firebase/firestore";
import { db } from "../../app/firebase/Firebase";

export const postBookDetails = async (details, user, bookID) => {
	let bookDetailsRef
	const bookDetails = {
		title: details.title,
		description: details.description,
		genres: details.genres,
		author: user.name,
		authorID: user.uid,
		likes: 0,
	}
	bookID  ? await setDoc(doc(db, "bookDetails", bookID), {
				...bookDetails,
		  	})
			: (bookDetailsRef = await addDoc(collection(db, "bookDetails"), {
				...bookDetails,
		  	}));
	return bookDetailsRef.id;

};

export const postBook = async (content) => {
	const bookRef = await addDoc(collection(db, "books"), {
		content: content,
	});
	return bookRef.id;
};

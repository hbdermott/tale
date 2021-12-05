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
		postdate: Date.now(),
		likes: 0,
	}
	bookID  ? await setDoc(doc(db, "bookDetails", bookID), {
				...bookDetails,
		  	})
			: (bookDetailsRef = await addDoc(collection(db, "bookDetails"), {
				...bookDetails,
		  	}));
	return bookDetailsRef ? bookDetailsRef.id : bookID;

};

export const postBook = async (content) => {
	const bookRef = await addDoc(collection(db, "books"), {
		content: content,
	});
	return bookRef.id;
};

export const likeBook = async (bookID) => {
	await setDoc(doc(db, "bookDetails", bookID), {
		likes: firebase.firestore.FieldValue.increment(1),
	});
}
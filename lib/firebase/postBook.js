import { addDoc, collection, doc, setDoc} from "@firebase/firestore";
import { db } from "../../app/firebase/Firebase";
import { getUTCTime } from "../time";

export const postBookDetails = async (details, user, bookID) => {
	let bookDetailsRef
	const bookDetails = {
		title: details.title,
		description: details.description,
		genres: details.genres,
		image: details.image,
		author: user.name,
		authorID: user.uid,
		postdate: getUTCTime(),
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

export const postBook = async (content, details, user) => {
	const bookRef = await addDoc(collection(db, "books"), {
		content: content,
	});
	await postBookDetails(details, user, bookRef.id);
	return bookRef.id;
};

export const updateBook = async (content, details, bookID) => {
	await setDoc(doc(db, "books", bookID), {
		content: content,
	});
	await setDoc(doc(db, "bookDetails", bookID), {
		title: details.title,
		description: details.description,
		genres: details.genres,
		image: details.image,
	}, { merge: true });
	return bookID;
}


export const likeBook = async (bookID) => {
	await setDoc(doc(db, "bookDetails", bookID), {
		likes: firebase.firestore.FieldValue.increment(1),
	});
}
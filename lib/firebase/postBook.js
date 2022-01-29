import { addDoc, collection, doc, setDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../app/firebase/Firebase";
import { getUTCTime } from "../time";

export const postBookDetails = async (details, user, bookID) => {
	let bookDetailsRef
	const bookDetails = {
		...details,
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
		tags: details.tags,
		image: details.image,
	}, { merge: true });
	return bookID;
}

export const likeBook = async (userID, current, bookID, likes) => {
	const bookRef = doc(db, "bookDetails", bookID);
	const userRef = doc(db, "userData", userID);
	if (current.includes(bookID)) {
		await setDoc(
			userRef,
			{
				likedBooks: current.filter((book) => book !== bookID),
			},
			{ merge: true }
		);
		await updateDoc(bookRef, {
			likes: likes - 1,
		});
	} else {
		await setDoc(
			userRef,
			{
				likedBooks: [...current, bookID],
			},
			{ merge: true }
		);
		await updateDoc(bookRef, {
			likes: likes + 1,
		});
	}
};

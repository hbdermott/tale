import { collection, doc, getDoc, getDocs } from "@firebase/firestore";
import { db } from "../../app/firebase/Firebase";

export const fetchBookDetails = async () => {
	const query = await getDocs(collection(db, "bookDetails"));
	const cardData = [];
	query.forEach((doc) => {
		cardData.push({ id: doc.id, ...doc.data() });
	});
	return cardData;
};

export const fetchBook = async (id, details = false) => {
    const book = {}
    const query = await getDoc(doc(db, "books", id));
    book.content = JSON.parse(query.data().content);
    if(details){
        const query = await getDoc(doc(db, "bookDetails", id));
        book = {...book, ...query.data()}
    }
    return book;
}

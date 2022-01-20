import { collection, doc, getDoc, getDocs } from "@firebase/firestore";
import { db } from "../../app/firebase/Firebase";

// let cache = {}

export const fetchBookDetails = async () => {
	const query = await getDocs(collection(db, "bookDetails"));
	const cardData = [];
	query.forEach((doc) => {
		cardData.push({ id: doc.id, ...doc.data() });
	});
	return cardData;
};

export const fetchBook = async (id, details = false) => {
    let book = {}
    // if(id in cache)
    //     return cache[id]
    const query = await getDoc(doc(db, "books", id));
    book.content = JSON.parse(query.data().content);
    if(details){
        const details = await getDoc(doc(db, "bookDetails", id));
        book = {id: id, ...book, ...details.data()}
    }
    // cache[id] = book;
    return book;
}

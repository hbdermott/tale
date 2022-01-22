import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/User";
import { db } from "./Firebase";

export const useLikedBooks = () => {
    const [liked, setLiked] = useState([]);
    const {user, loading} = useAuth();
    useEffect(() => {
        let isMounted = true; 
        const getLiked = async () => {
            const books = await getLikedBooks(user.uid);
            return books;
        }
        if(!loading && user){
            const books = getLiked();
            if(isMounted)
                setLiked(books)
        }
        else if(!loading && !user){
            setLiked([]);
        }
        return () => {
            isMounted = false;
        }
    },[loading, user])
    return liked;
}

export const getUserData = async (userID) => {
	if (!userID) return {};
	const query = await getDoc(doc(db, "userData", userID));
	if (query.exists()) {
		const data = query.data();
		return data;
	} else {
		await setDoc(doc(db, "userData", userID), {
			likedBooks: [],
		});
		return {};
	}
};

// export const likeBook = async (bookID, userID) => {
//     if(userID){
//         const likedBooks = await getLikedBooks(userID);
//         const bookRef = doc(db, "bookDetails", bookID);
//         const bookData =  await getDoc(bookRef)
//         const likes = bookData.data().likes;
//         if (likedBooks.includes(bookID)) {
//             await setDoc(
//                 doc(db, "userData", userID),
//                 {
//                     likedBooks: likedBooks.filter((book) => book !== bookID),
//                 },
//                 { merge: true }
//             );
//             await updateDoc(bookRef, {
//                 likes: likes - 1
//             })
//         } else {
//             await setDoc(
//                 doc(db, "userData", userID),
//                 {
//                     likedBooks: [...likedBooks, bookID],
//                 },
//                 { merge: true }
//             );
//             await updateDoc(bookRef, {
//                 likes: likes + 1
//             })
//         }
//     }
//}
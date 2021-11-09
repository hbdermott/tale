import { collection, getDocs } from "@firebase/firestore";
import { useEffect } from "react";
import { db } from "../../app/firebase/Firebase";
import Card from "../../components/Feed/Card/Card";

const tempCard = {
    id: 123123123123,
    title: "the joys of programming",
    postdate: "Yesterday",
    genres: ["programming", "fun"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    likes: 933,
    author: "hunter",
    authorID: 123123123

}

const Read = ({books}) => {
    return (
    <>
        <Card {...tempCard} />
        {books.map(book => <Card key={book.id} {...book}/>)}
    </>)
}

export async function getServerSideProps() {
	// Fetch data from external API
	const query = await getDocs(collection(db, "books"));
    const books = []
   query.forEach((doc) => {
            books.push({id: doc.id,  ...doc.data()})
	});
    console.log(books);
	return { props: {books: books}};
}

export default Read;
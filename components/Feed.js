import Card from "./Card";
import db from "../app/firebase"
import { collection, getDocs } from "firebase/firestore";




const Feed = ({books}) => {
    return (
        <>
            {books.map(book => <Card key={book.title} {...book}></Card>)}
        </>
    )

}

export async function getServerSideProps() {
	// Fetch data from external API
	const querySnapshot = await getDocs(collection(db, "cities"));
    const books = querySnapshot.map((doc) => doc.data())
    console.log(books);
	// Pass data to the page via props
	return { props: {books}};
}

export default Feed;
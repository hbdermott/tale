import { Box } from "@chakra-ui/layout";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/User";
import { fetchBook, fetchBookDetails } from "../../lib/firebase/fetchBook";
import Link from "next/link";
import { Button } from "@chakra-ui/button";
import Tiptap from "../../components/Write/Editor/TipTap";
const Book = ({book}) => {
	const {user} = useAuth();
    return (
	
			<>
				<Navbar sticky>{user && user.uid === book.authorID && <Link passHref href={`/write/${book.id}`}><Button variant="edit">Edit</Button></Link>}</Navbar>
				<Box p={10}>
					<Tiptap book={book} editable={false} />
				</Box>
			</>
		);
}

export async function getServerSideProps(context) {
    const book = (await fetchBook(context.params.id, true));
	return { props: { book: book} };
}


Book.getLayout = function getLayout(book) {
	return(
		<>
		{book}
		</>
	);
};

export default Book;
import { Flex } from "@chakra-ui/layout";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/User";
import { fetchBook, fetchBookDetails } from "../../lib/firebase/fetchBook";
import Link from "next/link";
import { Button } from "@chakra-ui/button";
import Tiptap from "../../components/Write/Editor/TipTap";
import useSWR from "swr";
import { fetchUserData } from "../../lib/fetchUser";
const Book = ({book}) => {
	const { user } = useAuth();
	const { data, error } = useSWR(user?.uid, fetchUserData);
    return (
			<>
				<Navbar sticky>
					{user && user.uid === book.authorID && (
						<Link passHref href={`/write/${book.id}`}>
							<Button variant="edit">Edit</Button>
						</Link>
					)}
				</Navbar>
				<Flex
					direction="column"
					overflow="hidden"
					align="center"
					w="100%"
					h="100%"
				>
					<Tiptap
						book={book}
						userData={{ ...data, userID: user?.uid }}
						editable={false}
					/>
				</Flex>
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
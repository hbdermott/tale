import { Box } from "@chakra-ui/layout";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "../../app/firebase/Firebase";
import PlateEditor from "../../components/Write/Editor/PlateEditor";

const Book = ({book}) => {
    return (
			<>
				<Box p={10}>
					<PlateEditor readonly={true} value={book}></PlateEditor>
				</Box>
			</>
		);
}

export async function getServerSideProps(context) {
	// Fetch data from external API
	const query = await getDoc(doc(db, "books", context.params.id));
    console.log(query)
    const data = JSON.parse(query.data().content)
	console.log(data);
	return { props: { book: data } };
}

export default Book;
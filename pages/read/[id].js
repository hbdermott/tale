import { Box } from "@chakra-ui/layout";
import PlateEditor from "../../components/Write/Editor/PlateEditor";
import { fetchBook } from "../../lib/firebase/fetchBook";

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
    const bookContent = (await fetchBook(context.params.id)).content;
	return { props: { book: bookContent } };
}

export default Book;
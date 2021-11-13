import { Center, SimpleGrid } from "@chakra-ui/layout";
import Card from "../../components/Read/Feed/Card/Card";
import {fetchBookDetails} from "../../lib/firebase/fetchBook";

const Read = ({bookDetails}) => {
    return (
			<>
					<SimpleGrid
						m={5}
						minChildWidth="300px"
						spacingX="40px"
						spacingY="20px"
						// zIndex={-1}
					>
						{bookDetails.map((book) => (
							<Card key={book.id} {...book} />
						))}
					</SimpleGrid>
			</>
		);
}

export async function getServerSideProps() {
	// Fetch data from external API
	const bookDetails = await fetchBookDetails();
	return { props: {bookDetails: bookDetails}};
}

export default Read;
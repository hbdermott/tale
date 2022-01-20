import { Center, SimpleGrid } from "@chakra-ui/layout";
import Card from "../../components/Read/Feed/Card/Card";
import {fetchBookDetails} from "../../lib/firebase/fetchBook";

const Read = ({bookDetails}) => {
    return (
			<>
				{/* <Center> */}
				<SimpleGrid
					m={5}
					minChildWidth="400px"
					spacingX="40px"
					spacingY="20px"
				>
					{bookDetails.map((book) => (
						<Center key={book.id}>
							<Card key={book.id} {...book} />
						</Center>
					))}
				</SimpleGrid>
				{/* </Center> */}
			</>
		);
}

export async function getServerSideProps() {
	// Fetch data from external API
	const bookDetails = await fetchBookDetails();
	return { props: {bookDetails: bookDetails}};
}

export default Read;
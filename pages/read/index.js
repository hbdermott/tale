import { Center, SimpleGrid } from "@chakra-ui/layout";
import useSWR from "swr";
import Card from "../../components/Read/Feed/Card/Card";
import CardCarousel from "../../components/Read/Feed/Card/CardCarousel";
import { useAuth } from "../../context/User";
import { fetchUserData } from "../../lib/fetchUser";
import {fetchBookDetails} from "../../lib/firebase/fetchBook";

const Read = ({bookDetails}) => {
	const { user } = useAuth();
	const { data, error } = useSWR(user?.uid, fetchUserData);
	
    return (
			<>
				<SimpleGrid m={5} minChildWidth="400px" spacingX="40px" spacingY="20px">
					{bookDetails.map((book) => (
						<Center key={book.id}>
							<Card
								key={book.id}
								userData={{ ...data, userID: user?.uid }}
								{...book}
							/>
						</Center>
					))}
				</SimpleGrid>
				<CardCarousel>
					{bookDetails.map((book) => (
						<Card
							key={book.id}
							userData={{ ...data, userID: user?.uid }}
							{...book}
						/>
					))}
					{bookDetails.map((book) => (
						<Card
							key={book.id + 2}
							userData={{ ...data, userID: user?.uid }}
							{...book}
						/>
					))}
				</CardCarousel>
			</>
		);
}

export async function getStaticProps() {
	// Fetch data from external API
	const bookDetails = await fetchBookDetails();
	return { props: {bookDetails: bookDetails} };
}

export default Read;
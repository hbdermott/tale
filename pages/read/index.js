import { Center, SimpleGrid } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useLikedBooks } from "../../app/firebase/useLiked";
import Card from "../../components/Read/Feed/Card/Card";
import {fetchBookDetails} from "../../lib/firebase/fetchBook";

const Read = ({bookDetails}) => {

    return (
			<>
				<SimpleGrid m={5} minChildWidth="400px" spacingX="40px" spacingY="20px">
					{bookDetails.map((book) => (
						<Center key={book.id}>
							<Card
								key={book.id}
								{...book}
							/>
						</Center>
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
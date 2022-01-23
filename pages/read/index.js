import { Center, SimpleGrid } from "@chakra-ui/layout";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import useSWR from "swr";
import Card from "../../components/Read/Feed/Card/Card";
import CardCarousel from "../../components/Read/Feed/Card/CardCarousel";
import { useAuth } from "../../context/User";
import { fetchUserData } from "../../lib/fetchUser";
import {fetchBookDetails} from "../../lib/firebase/fetchBook";
import useDrag from "../../lib/useDrag";

const Read = ({bookDetails}) => {
	const { user } = useAuth();
	const { data, error } = useSWR(user?.uid, fetchUserData);
	const { dragStart, dragStop, dragMove, dragging } = useDrag();
	const handleDrag =
		({ scrollContainer }) =>
		(ev) =>
			dragMove(ev, (posDiff) => {
				if (scrollContainer.current) {
					scrollContainer.current.scrollLeft += posDiff;
				}
			});


	// const [selected, setSelected] = React.useState < string > "";
	// const handleItemClick = (itemId: string) => () => {
	// 	if (dragging) {
	// 		return false;
	// 	}
	// 	setSelected(selected !== itemId ? itemId : "");
	// };
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
				<ScrollMenu
					onMouseDown={() => dragStart}
					onMouseUp={() => dragStop}
					onMouseMove={handleDrag}
					// onWheel={onWheel}
				>
					{bookDetails.map((book) => (
						<Card
							dragging={dragging}
							key={book.id}
							userData={{ ...data, userID: user?.uid }}
							{...book}
						/>
					))}
					{bookDetails.map((book) => (
						<Card
							dragging={dragging}
							key={book.id + 2}
							userData={{ ...data, userID: user?.uid }}
							{...book}
						/>
					))}
				</ScrollMenu>
			</>
		);
}

function onWheel(apiObj, ev) {
	const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
	
	if (isThouchpad) {
		ev.stopPropagation();
		return;
	}

	if (ev.deltaY < 0) {
		apiObj.scrollNext();
	} else if (ev.deltaY > 0) {
		apiObj.scrollPrev();
	}
}

export async function getServerSideProps() {
	// Fetch data from external API
	const bookDetails = await fetchBookDetails();
	return { props: {bookDetails: bookDetails} };
}

export default Read;
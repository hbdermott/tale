import { useAuth } from "../../context/User";
import { useRouter } from "next/dist/client/router";
import { Box, Flex } from "@chakra-ui/layout";
import Navbar from "../../components/Navbar";
import useWindowDimensions from "../../lib/useWindowDimensions";
import { useEffect } from "react";
import { fetchBook } from "../../lib/firebase/fetchBook";
import Tiptap from "../../components/Write/Editor/TipTap";

const Edit = ({book}) => {
	const { user, loading } = useAuth();
	const router = useRouter();
	useEffect(() => {
        if(!loading){
            if(!user || user.uid !== book.authorID)
                router.push("/write");
        }
	}, [user, loading, router]);
	return (
		// <Flex direction="column" overflow="hidden" align="center" w="100%" h="100%">
			user && user.uid === book.authorID && <Tiptap book={book}/>
	);
};

export default Edit;

const WriteLayout = ({ children }) => {
	const { height, width } = useWindowDimensions();
	return (
		<Flex
			minH="-webkit-fill-available"
			w="100%"
			h={height}
			flexDir="column"
			overflow="hidden"
			justify="space-between"
		>
			<Navbar />
			{children}
		</Flex>
	);
};

Edit.getLayout = function getLayout(edit) {
	return <WriteLayout>{edit}</WriteLayout>;
};

export async function getServerSideProps(context) {
	let book = await fetchBook(context.params.id, true);
	book = {...book, id: context.params.id};
	return { props: { book: book } };
}


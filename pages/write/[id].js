import { useAuth } from "../../context/User";
import { useRouter } from "next/dist/client/router";
import { Box, Flex } from "@chakra-ui/layout";
import { db } from "../../app/firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import Editor from "../../components/Write/Editor/Editor";
import Navbar from "../../components/Navbar";
import { useMediaQuery } from "@chakra-ui/react";
import NavbarCompact from "../../components/Navbar";
import useWindowDimensions from "../../lib/useWindowDimensions";
import { useEffect } from "react";
import { fetchBook } from "../../lib/firebase/fetchBook";

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
			user && user.uid === book.authorID && <Editor value={book} />
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
	const book = await fetchBook(context.params.id, true);

	return { props: { book: book } };
}


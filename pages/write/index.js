import { useAuth } from "../../context/User";
import { useRouter } from "next/dist/client/router";
import { Box, Flex } from "@chakra-ui/layout";
import { db } from "../../app/firebase/Firebase";
import { collection, addDoc } from "firebase/firestore"; 
import Editor from "../../components/Write/Editor/Editor";
import Navbar from "../../components/Navbar";
import { useMediaQuery } from "@chakra-ui/react";
import NavbarCompact from "../../components/Navbar/Compact";
import useWindowDimensions from "../../lib/useWindowDimensions";

const Write = (props) => {
	// const { user, loading } = useAuth();
	// const router = useRouter();
	// useEffect(() => {
	// 	if (!loading && !user) router.push("/login");
	// }, [user, loading, router]);
	return (
		<Flex direction="column" overflow="hidden" align="center" w="100%" h="100%">
			<Editor/>
		</Flex>
	);
};

export default Write;

const WriteLayout = ({children}) => {
	const { height, width } = useWindowDimensions();
	return(
		<Flex
			minH="-webkit-fill-available"
			w="100%"
			h={height}
			flexDir="column"
			overflow="hidden"
			justify="space-between"
		>
			<Navbar
			/>
			{children}
		</Flex>)
}

Write.getLayout = function getLayout(write) {
	return (
		<WriteLayout>
			{write}
		</WriteLayout>
	);
};
import { useAuth } from "../../context/User";
import { useRouter } from "next/dist/client/router";
import { Box, Flex } from "@chakra-ui/layout";
import { db } from "../../app/firebase/Firebase";
import { collection, addDoc } from "firebase/firestore"; 
import PlateEditor from '../../components/Plate/Plate'
import Navbar from "../../components/Navbar/Navbar";

const Write = (props) => {
	// const { user, loading } = useAuth();
	// const router = useRouter();
	// useEffect(() => {
	// 	if (!loading && !user) router.push("/login");
	// }, [user, loading, router]);

	return (
		<Flex direction="column" overflow="hidden" align="center" w="100%" h="100%">
			<PlateEditor/>
		</Flex>
	);
};

export default Write;

Write.getLayout = function getLayout(write) {
	return (
		<Flex
			minH="-webkit-fill-available"
			w="100%"
			h="100vh"
			flexDir="column"
			overflow="hidden"
			justify="space-between"
		>
			<Navbar />
			{write}
		</Flex>
	);
};
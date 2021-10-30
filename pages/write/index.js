import { useAuth } from "../../context/User";
import { useRouter } from "next/dist/client/router";
import { Flex } from "@chakra-ui/layout";
import { db } from "../../app/firebase/Firebase";
import { collection, addDoc } from "firebase/firestore"; 
import PlateEditor from '../../components/Plate/Plate'

const Write = (props) => {
	// const { user, loading } = useAuth();
	// const router = useRouter();
	// useEffect(() => {
	// 	if (!loading && !user) router.push("/login");
	// }, [user, loading, router]);

	return (
		<Flex direction="column" align="center" w="100%" h="100vh">
			<PlateEditor/>
		</Flex>
	);
};

export default Write;

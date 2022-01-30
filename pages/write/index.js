import { useAuth } from "../../context/User";
import { useRouter } from "next/dist/client/router";
import { Flex } from "@chakra-ui/layout";
import Navbar from "../../components/Navbar";
import useWindowDimensions from "../../lib/useWindowDimensions";
import { useEffect } from "react";
import Tiptap from "../../components/Write/Editor/TipTap";

const Write = (props) => {
	// const { user, loading } = useAuth();
	// const router = useRouter();
	// useEffect(() => {
	// 	if (!loading && !user) router.push("/login");
	// }, [user, loading, router]);
	return (
		<Flex direction="column" overflow="hidden" align="center" w="100%" h="100%">
			<Tiptap/>
		</Flex>
	);
};

export default Write;

const WriteLayout = ({ children }) => {
	const { height, width } = useWindowDimensions();

	return (
		<Flex
			minH="-webkit-fill-available"
			w="100%"
			h={"100vh"}
			flexDir="column"
			overflow="hidden"
			justify="space-between"
		>
			<Navbar />
			{children}
		</Flex>
	);
};

Write.getLayout = function getLayout(write) {
	return <WriteLayout>{write}</WriteLayout>;
};

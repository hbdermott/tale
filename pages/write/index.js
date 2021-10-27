import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "/home/hunter/Documents/javascript/novel/node_modules/react-quill/dist/quill.snow.css";
import { useAuth } from "../../context/User";
import { useRouter } from "next/dist/client/router";
import { Box, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { db } from "../../app/firebase/Firebase";
import { collection, addDoc } from "firebase/firestore"; 


const ReactQuill = dynamic(() => import('react-quill'), {ssr: false})
const Write = (props) => {

	const [text, setText] = useState('');
	const [isLoading, setLoading] = useState(false);
	const { user, loading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !user) router.push("/login");
	}, [user, loading, router]);

	const submitWriting = async () => {
		setLoading(true)
		const doc = await addDoc(collection(db, "books"), {
			author: user.uid,
			content: text
		})
		setLoading(false)
	}


	return (
		<Flex align="center" direction="column" justify="center">
			<Box bgColor="gray.300" w="50%" h="50vh">
				<ReactQuill
					theme="snow"
					style={{ color: "black" }}
					placeholder={"Write something awesome..."}
					value={text}
					onChange={(value) => setText(value)}
				></ReactQuill>
			</Box>
			<Button isLoading={isLoading} onClick={() => submitWriting()}>Submit</Button>
		</Flex>
	);
};

export default Write;

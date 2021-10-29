import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../context/User";
import { useRouter } from "next/dist/client/router";
import { Box, Center, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { db } from "../../app/firebase/Firebase";
import { collection, addDoc } from "firebase/firestore"; 
import PlateEditor from '../../components/Plate/Plate'

const Write = (props) => {
	const { user, loading } = useAuth();
	const router = useRouter();

	// useEffect(() => {
	// 	if (!loading && !user) router.push("/login");
	// }, [user, loading, router]);

	return (
		<Flex direction="column" mt="200px" w="100%" h="100vh">
			<PlateEditor/>
		</Flex>
	);
};

export default Write;

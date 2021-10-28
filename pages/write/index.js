import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../context/User";
import { useRouter } from "next/dist/client/router";
import { Box, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { db } from "../../app/firebase/Firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import SlateEditor from "../../components/Slate/Slate";

const Write = (props) => {
	const { user, loading } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!loading && !user) router.push("/login");
	}, [user, loading, router]);

	return (
			<SlateEditor />
	);
};

export default Write;

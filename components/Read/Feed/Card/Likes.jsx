import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { HStack, Text } from "@chakra-ui/layout";
import { Star } from "@styled-icons/fluentui-system-filled";
import { useAuth } from "../../../../context/User";
import { getUserData, useLikedBooks } from "../../../../app/firebase/useLiked";
import useSWR from "swr";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../../app/firebase/Firebase";

const likeBook = async (userID, current, bookID, likes) => {
	const bookRef = doc(db, "bookDetails", bookID);
	const userRef = doc(db, "userData", userID);
	if (current.includes(bookID)) {
		await setDoc(
			userRef,
			{
				likedBooks: current.filter((book) => book !== bookID),
			},
			{ merge: true }
		);
		await updateDoc(bookRef, {
			likes: likes - 1,
		});
	} else {
		await setDoc(
			userRef,
			{
				likedBooks: [...current, bookID],
			},
			{ merge: true }
		);
		await updateDoc(bookRef, {
			likes: likes + 1,
		});
	}
};

const Likes = ({id, likes = 0, ...rest }) => {
	const {user, loading} = useAuth();
	const [isLiked, setLiked] = useState(true);
	const [likeCount, setLikesCount] = useState(likes);
	const {data, error} = useSWR(user?.uid, getUserData);
	useEffect(() => {
		if(!loading && user){
			console.log(data)
			setLiked(data?.likedBooks.includes(id))
		}
		else if(!loading && !user){
			setLiked(false);
		}
	}, [data, loading, user, id])
	return (
		<HStack>
			<Text fontSize="md" color="gray.400" fontWeight="bold">
				{likeCount < 1000 ? likeCount : `${(likeCount / 1000).toFixed(1)}k`}
			</Text>
			<IconButton
				size="lg"
				aria-label="Like"
				onClick={async (e) => {
					e.stopPropagation();
					if(!loading && user){
						setLiked(!isLiked);
						if (isLiked) setLikesCount(likeCount - 1);
						else setLikesCount(likeCount + 1);
						await likeBook(user.uid, data?.likedBooks, id, likeCount);
					}
					
				}}
				boxShadow="none"
				bg="none"
				_active={{
					boxShadow: "none",
				}}
				_focus={{
					boxShadow: "none",
				}}
				icon={<Star width="36px" color={isLiked ? "gold" : "gray"} />}
				{...rest}
			/>
		</HStack>
	);
};

export default Likes;

import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { HStack, Text } from "@chakra-ui/layout";
import { Star } from "@styled-icons/fluentui-system-filled";
import { useAuth } from "../../../../context/User";
import { getLikedBooks, likeBook, useLikedBooks } from "../../../../app/firebase/useLiked";
import useSWR from "swr";

// const getUserData = async (userID) => {
// 	console.log(userID)
// 	// if (!userID) return {};
// 	const query = await getDoc(doc(db, "userData", userID));
// 	if (query.exists()) {
// 		console.log("here")
// 		const data = query.data()
// 		return data
// 	}
// 	else{
// 		console.log("Create user data file!")
// 		await setDoc(doc(db, "userData", userID), {
// 			likedBooks: [],
// 		});
// 		return {};
// 	}
//}

const Likes = ({id, likes = 0, ...rest }) => {
	const {user, loading} = useAuth();
	const [isLiked, setLiked] = useState(true);
	const [likeCount, setLikesCount] = useState(likes);
	const {data, error} = useSWR(user?.uid, getLikedBooks);
	useEffect(() => {
		if(!loading && user){
			console.log(data)
			setLiked(data?.includes(id))
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
						await likeBook(id, user.uid);
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

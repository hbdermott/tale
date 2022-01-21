import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { HStack, Text } from "@chakra-ui/layout";
import { Star } from "@styled-icons/fluentui-system-filled";
import { useAuth } from "../../../../context/User";
import { getLikedBooks, likeBook, useLikedBooks } from "../../../../app/firebase/useLiked";

const Likes = ({id, likes = 0, ...rest }) => {
	const {user, loading} = useAuth();
	const [isLiked, setLiked] = useState(false);
	const [likeCount, setLikesCount] = useState(likes);
	useEffect(() => {
		let isMounted = true; 
		const getLiked = async () => {
			const books = await getLikedBooks(user.uid);
			const liked = books.includes(id);
			if(isMounted)
				setLiked(liked);
		}
		if(user && !loading){
			getLiked()
		}
		else if(!user && !loading){
			if (isMounted) setLiked(false);
		}
		return () => {
			isMounted = false;
		};
		
	}, [id, user, loading]);
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
						if (isLiked) setLikesCount(likeCount - 1);
						else setLikesCount(likeCount + 1);
						await likeBook(id, user.uid);
						setLiked(!isLiked);
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

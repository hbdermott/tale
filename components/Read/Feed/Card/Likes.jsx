import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { HStack, Text } from "@chakra-ui/layout";
import { Star } from "@styled-icons/fluentui-system-filled";
import { likeBook } from "../../../../lib/firebase/postBook";


const Likes = ({bookID, likes = 0, likedBooks, userID, ...rest }) => {
	const [isLiked, setLiked] = useState(false);
	const [likeCount, setLikesCount] = useState(likes);
	useEffect(() => {
		likedBooks ? setLiked(likedBooks.includes(bookID)) : setLiked(false);
	}, [likedBooks, bookID])
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
					if(likedBooks){
						setLiked(!isLiked);
						if (isLiked) setLikesCount(likeCount - 1);
						else setLikesCount(likeCount + 1);
						await likeBook(userID, likedBooks, bookID, likeCount);
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

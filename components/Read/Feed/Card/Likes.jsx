import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { Flex, HStack, Text } from "@chakra-ui/layout";
import { Star } from "@styled-icons/fluentui-system-filled";
import { likeBook } from "../../../../lib/firebase/postBook";


const Likes = ({bookID, likes = 0, likedBooks, userID, ...rest }) => {
	const [isLiked, setLiked] = useState(false);
	const [likeCount, setLikesCount] = useState(likes);
	useEffect(() => {
		likedBooks ? setLiked(likedBooks.includes(bookID)) : setLiked(false);
	}, [likedBooks, bookID])
	return (
		<Flex
			h="full"
			w="full"
			onClick={async (e) => {
				e.stopPropagation();
				if (likedBooks) {
					setLiked(!isLiked);
					if (isLiked) setLikesCount(likeCount - 1);
					else setLikesCount(likeCount + 1);
					await likeBook(userID, likedBooks, bookID, likeCount);
				}
			}}
			_hover={{
				bg: "gray.300",
				rounded: "xl",
			}}
			alignSelf="center"
			align="center"
			justify="space-between"
			px={3}
		>
			<Text fontSize="md" color="gray.400" fontWeight="bold">
				{likeCount < 1000 ? likeCount : `${(likeCount / 1000).toFixed(1)}k`}
			</Text>
			<IconButton
				size="md"
				h="100%"
				w="full"
				aria-label="Like"
				boxShadow="none"
				bg="none"
				ml={1}
				_active={{
					boxShadow: "none",
				}}
				_hover={{
					bg: "none",
				}}
				_focus={{
					boxShadow: "none",
				}}
				icon={<Star width="36px" color={isLiked ? "gold" : "gray"} />}
				{...rest}
			/>
		</Flex>
	);
};

export default Likes;

import { useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { HStack, Text } from "@chakra-ui/layout";
import { Star } from "@styled-icons/fluentui-system-filled";

const Likes = ({isLiked = false, likes = 0, ...rest }) => {
	const [like, setVote] = useState(isLiked);
	const [likesCount, setLikesCount] = useState(likes);

	return (
		<HStack>
			<Text fontSize="md" color="gray.400" fontWeight="bold">
				{likesCount < 1000 ? likesCount : `${(likesCount / 1000).toFixed(1)}k`}
			</Text>
			<IconButton
				size="md"
				aria-label="Like"
				onClick={(e) => {
					e.stopPropagation();
					if (like) setLikesCount(likesCount - 1);
					else setLikesCount(likesCount + 1);
					setVote(!like);
				}}
				boxShadow="none"
				bg="none"
				_active={{
					boxShadow: "none",
				}}
				_focus={{
					boxShadow: "none",
				}}
				icon={<Star width="36px" color={like ? "gold" : "gray"} />}
				{...rest}
			/>
		</HStack>
	);
};

export default Likes;

import { useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { HStack, Text } from "@chakra-ui/layout";
import { Heart } from "@styled-icons/fluentui-system-filled";

const Likes = ({isLiked = false, likes = 0, ...rest }) => {
	const [like, setVote] = useState(isLiked);;

	return (
		<HStack>
			<IconButton
				size="sm"
				border="0px"
				aria-label="Like"
				variant="ghost"
				py={2}
				onClick={(e) => {
					e.stopPropagation();
					setVote(!like)
				}}
				icon={<Heart color={like ? "red" : "gray"} />}
				{...rest}
			/>
			<Text fontSize="sm">
				{likes < 1000
					? likes
					: `${(likes / 1000).toFixed(1)}k`}
			</Text>
		</HStack>
	);
};

export default Likes;

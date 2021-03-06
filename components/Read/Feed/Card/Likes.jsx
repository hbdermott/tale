import { useEffect, useState } from "react";
import { IconButton, Button } from "@chakra-ui/button";
import { Flex, HStack, Text } from "@chakra-ui/layout";
import { Star } from "@styled-icons/fluentui-system-filled";
import { likeBook } from "../../../../lib/firebase/postBook";
import { Tooltip } from "@chakra-ui/react";


const Likes = ({bookID, likes = 0, likedBooks, userID, ...rest }) => {
	const [isLiked, setLiked] = useState(false);
	const [likeCount, setLikesCount] = useState(likes);
	useEffect(() => {
		likedBooks ? setLiked(likedBooks.includes(bookID)) : setLiked(false);
	}, [likedBooks, bookID])
	return (
		<Tooltip >
			<Button
				onClick={async (e) => {
					e.stopPropagation();
					if (likedBooks) {
						setLiked(!isLiked);
						if (isLiked) setLikesCount(likeCount - 1);
						else setLikesCount(likeCount + 1);
						await likeBook(userID, likedBooks, bookID, likeCount);
					}
				}}
				rightIcon={<Star size="36px" color={isLiked ? "gold" : "gray"} />}
				variant="inset"
				aria-label="Like"
			>
				{likeCount < 1000 ? likeCount : `${(likeCount / 1000).toFixed(1)}k`}
			</Button>
		</Tooltip>
	);
};

export default Likes;

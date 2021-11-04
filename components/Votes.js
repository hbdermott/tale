import { useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Text, VStack } from "@chakra-ui/layout";

const Votes = (props) => {
	const [vote, setVote] = useState(props.vote);

	const clickVote = (e, voteType) => {
		e.stopPropagation()
		if (vote === voteType)
            setVote(null);
        else
		    setVote(voteType);
	};

	return (
		<VStack marginX={3} marginY={2} spacing={0}>
			<IconButton
				size="sm"
				border="0px"
				aria-label="Upvote"
				variant="link"
				py={2}
				onClick={(e) => clickVote(e, "up")}
				icon={<TriangleUpIcon color={vote === "up" ? "green" : "gray"} />}
			/>
			<Text fontSize="sm">
				{props.voteCount < 1000
					? props.voteCount
					: `${(props.voteCount / 1000).toFixed(1)}k`}
			</Text>
			<IconButton
				size="sm"
				aria-label="Downvote"
				variant="link"
				py={2}
				onClick={(e) => clickVote(e, "down")}
				icon={<TriangleDownIcon color={vote === "down" ? "red" : "gray"} />}
			/>
		</VStack>
	);
};

export default Votes;

import { Avatar } from "@chakra-ui/avatar"
import { Badge, Flex, Heading, HStack, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout"
import Likes from "./Likes"
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useState } from "react";

const Card = ({id, title, postdate, genres, description, likes, author, authorID}) => {
	const [loading, setLoading] = useState(false);
    return (
			<LinkBox
				height="300px"
				border="1px solid gray"
				p={6}
				borderRadius={10}
				// zIndex="inherit"
				onClick={() => setLoading(true)}
			>
				<Heading py={2}>
					<Link href={`/read/${id}`}>
						<LinkOverlay>{title}</LinkOverlay>
					</Link>
				</Heading>
				{genres && (
					<HStack py={2}>
						{genres.map((genre) => (
							<Badge key={genre}>{genre}</Badge>
						))}
					</HStack>
				)}
				{description && <Text py={3}>{description}</Text>}
				<Flex align="center" justify="space-between">
					<Likes likes={likes} />
					<Text>{postdate}</Text>
					<ChakraLink href={`/author/${authorID}`}>
						<Text>{author}</Text>
					</ChakraLink>
				</Flex>
			</LinkBox>
		);
}

export default Card

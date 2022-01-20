import { Avatar } from "@chakra-ui/avatar"
import { Badge, Box, Flex, Heading, HStack, LinkBox, LinkOverlay, Text } from "@chakra-ui/layout"
import Likes from "./Likes"
import Link from "next/link";
import { Link as ChakraLink, useStyleConfig } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useState } from "react";
const Card = ({id, title, postdate, genres, description, likes, author, authorID}) => {
	const [loading, setLoading] = useState(false);
	const style = useStyleConfig('Card', {})
    return (
			<Box __css={style}>
				<LinkBox height="full" onClick={() => setLoading(true)}>
					<Heading h="10%" size="lg" py={2}>
						<Link href={`/read/${id}`} passHref>
							<LinkOverlay>{title}</LinkOverlay>
						</Link>
					</Heading>
					<Flex h="90%" flexDirection="column" justify="space-between">
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
					</Flex>
				</LinkBox>
			</Box>
		);
}

export default Card

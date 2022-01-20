import { Avatar } from "@chakra-ui/avatar"
import { Badge, Box, Flex, Heading, HStack, LinkBox, LinkOverlay, Stack, Text, VStack } from "@chakra-ui/layout"
import Likes from "./Likes"
import Link from "next/link";
import Image from 'next/image'
import { Link as ChakraLink, useMultiStyleConfig } from "@chakra-ui/react";
import { useState } from "react";
const Card = ({id, title, postdate, genres, description, likes, author, authorID}) => {
	const styles = useMultiStyleConfig('Card', {})
	const postdateString = new Date(postdate).toLocaleString()
    return (
			<Box __css={styles.base}>
				<LinkBox h="full">
					<Box h={"210px"} bg={"gray.100"} pos={"relative"}>
						{/* <Image
						src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
						layout={"fill"}
					/> */}
					</Box>
					<Box __css={styles.body}>
						<Flex h="full" direction="column" justify="space-between">
							<Stack>
								<Heading fontSize="2xl">
									<Link href={`/read/${id}`} passHref>
										<LinkOverlay>{title}</LinkOverlay>
									</Link>
								</Heading>
								<Text color={"gray.400"}>{description}</Text>
							</Stack>
							<Flex justify="space-between">
								<HStack>
									<Avatar name={author} src={`/api/user/avatar/${authorID}`} />
									<VStack spacing={0} fontSize={"sm"}>
										<Text fontWeight="bold">{author}</Text>
										<Text>{postdateString}</Text>
									</VStack>
								</HStack>
								<Likes isLiked={false} likes={likes} />
							</Flex>
						</Flex>
					</Box>
				</LinkBox>
			</Box>
		);
}

export default Card

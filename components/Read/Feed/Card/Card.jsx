import { Avatar } from "@chakra-ui/avatar"
import { Badge, Box, Flex, Heading, HStack, LinkBox, LinkOverlay, Stack, Text, VStack } from "@chakra-ui/layout"
import Likes from "./Likes"
import Link from "next/link";
import { Image, Link as ChakraLink, useMultiStyleConfig } from "@chakra-ui/react";
import { useState } from "react";
import { getLocalTimeString } from "../../../../lib/time";
const Card = ({id, example, title, postdate, genres, description, image, likes, author, authorID}) => {
	const styles = useMultiStyleConfig('Card', {})
	const postdateString = example ? "Today!" : getLocalTimeString(postdate);
    return (
			<Box __css={styles.base}>
				<LinkBox h="full">
					<Box h={"210px"} bg={"gray.100"} pos={"relative"}>
						{image && <Image h="full" w="full" src={image} fit={"fill"} alt="Cover Image" />}
					</Box>
					<Box __css={styles.body}>
						<Flex h="full" direction="column" justify="space-between">
							<Stack>
								<Heading fontSize="2xl">
									{example ? (
										<>{title}</>
									) : (
										<Link href={`/read/${id}`} passHref>
											<LinkOverlay>{title}</LinkOverlay>
										</Link>
									)}
								</Heading>
								<Text color={"gray.400"}>{description}</Text>
							</Stack>
							<Flex justify="space-between">
								<HStack>
									<Avatar name={author} src={`/api/user/avatar/${authorID}`} />
									<VStack spacing={0} align={"left"} fontSize={"sm"}>
										<Text fontWeight="bold">{author}</Text>
										<Text>{postdateString}</Text>
									</VStack>
								</HStack>
								{/* <Likes id={id} likes={likes} /> */}
							</Flex>
						</Flex>
					</Box>
				</LinkBox>
			</Box>
		);
}

export default Card

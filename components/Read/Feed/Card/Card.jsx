import { Avatar } from "@chakra-ui/avatar"
import { Badge, Box, Center, Divider, Flex, Heading, HStack, LinkBox, LinkOverlay, Stack, Text, VStack } from "@chakra-ui/layout"
import Likes from "./Likes"
import Link from "next/link";
import { IconButton, Image, Link as ChakraLink, Spinner, useMultiStyleConfig } from "@chakra-ui/react";
import { useState } from "react";
import { getLocalTimeString } from "../../../../lib/time";
import { DocumentEdit, Edit } from "@styled-icons/fluentui-system-filled";
import EditIconButton from "./EditIconButton";
const Card = ({id, example, title, postdate, genres, description, image, likes, author, authorID, userData}) => {
	const styles = useMultiStyleConfig('Card', {})
	const postdateString = example ? "Today!" : getLocalTimeString(postdate);
	const [isLoading, setLoading] = useState(false);
    return (
			<Box __css={styles.base} position="relative">
				{isLoading && (
					<Box __css={styles.blur}>
						<Spinner
							size="xl"
							height="80px"
							width="80px"
							variant="centered"
							thickness="10px"
							
						/>
					</Box>
				)}

				<LinkBox
					h="full"
					filter={isLoading ? "blur(2px)" : "none"}
					onClick={() => setLoading(true)}
				>
					<Box h={"210px"} bg={"gray.100"} pos={"relative"}>
						{image && (
							<Image
								h="full"
								w="full"
								src={image}
								fit={"fill"}
								alt="Cover Image"
							/>
						)}
					</Box>
					{userData.userID === authorID && (
						<EditIconButton
							id={id}
							position="absolute"
							zIndex="2"
							right="10px"
							top="10px"
						/>
					)}
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
									<Avatar name={author} />
									<VStack spacing={0} align={"left"} fontSize={"sm"}>
										<Text fontWeight="bold">{author}</Text>
										<Text>{postdateString}</Text>
									</VStack>
								</HStack>
								<Center __css={styles.like}>
									<Likes bookID={id} likes={likes} {...userData} />
								</Center>
							</Flex>
						</Flex>
					</Box>
				</LinkBox>
			</Box>
		);
}

export default Card

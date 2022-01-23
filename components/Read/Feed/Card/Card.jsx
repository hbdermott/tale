import { Avatar } from "@chakra-ui/avatar"
import { Badge, Box, Flex, Heading, HStack, LinkBox, LinkOverlay, Stack, Text, VStack } from "@chakra-ui/layout"
import Likes from "./Likes"
import Link from "next/link";
import {  Image, Spinner, useMultiStyleConfig } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { getLocalTimeString } from "../../../../lib/time";
import EditIconButton from "./EditIconButton";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
const Card = ({id, dragging, example, title, postdate, genres, description, image, likes, author, authorID, userData, click}) => {
	const styles = useMultiStyleConfig('Card', {})
	const postdateString = example ? "Today!" : getLocalTimeString(postdate);
	const [isLoading, setLoading] = useState(false);
	  const visibility = useContext(VisibilityContext);
    return (
			<Box onClick={(e) => {
				if(dragging) {
					e.preventDefault()
					e.stopPropagation()
				};
			}} __css={styles.base} position="relative">
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
					onMouseDown={(e) => {
						e.preventDefault();
						e.stopPropagation();
					}}
					onMouseUp={(e) => {
						if(!dragging){
							setLoading(true);
						}
					}}
				>
					<Box h={"3xs"} bg={"gray.100"} pos={"relative"}>
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
								<Likes bookID={id} likes={likes} {...userData} />
							</Flex>
						</Flex>
					</Box>
				</LinkBox>
			</Box>
		);
}

export default Card

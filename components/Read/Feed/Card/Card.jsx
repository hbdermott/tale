import { Avatar } from "@chakra-ui/avatar"
import { Badge, Box, Flex, Heading, HStack, LinkBox, LinkOverlay, Stack, Text, VStack } from "@chakra-ui/layout"
import Likes from "./Likes"
import Link from "next/link";
import {  Image, Spinner, Tag, Tooltip, useMultiStyleConfig } from "@chakra-ui/react";
import { useState } from "react";
import { getLocalTimeString } from "../../../../lib/time";
import EditIconButton from "./EditIconButton";
const Card = ({id, example, title, postdate, tags, description, image, likes, author, authorID, userData, click}) => {
	const styles = useMultiStyleConfig('Card', {})
	const postdateString = example ? "Today!" : getLocalTimeString(postdate);
	const [isLoading, setLoading] = useState(false);
    return (
			<Box __css={styles.base} position="relative">
				{isLoading && !example && (
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
					filter={isLoading && !example ? "blur(2px)" : "none"}
					onClick={() => {
						setLoading(true);
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
					{userData?.userID === authorID && !example && (
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
								{tags && (
									<HStack pt="0">
										{tags.slice(0, 5).map((tag, index) => (
											<Tag size={"md"} key={tag} variant="solid">
												{tag}
											</Tag>
										))}
									</HStack>
								)}
								<Heading
									fontSize="2xl"
									overflow="hidden"
									textOverflow={"ellipsis"}
									whiteSpace={"nowrap"}
								>
									{example ? (
										<>{title}</>
									) : (
										<Link href={`/read/${id}`} passHref>
											<LinkOverlay>{title.repeat(3)}</LinkOverlay>
										</Link>
									)}
								</Heading>
								<Tooltip
									maxH={"130px"}
									closeDelay={200}
									placement="bottom"
									rounded={"lg"}
									overflowY="hidden"
									label={description.repeat(8)}
									aria-label="A tooltip"
								>
									<Text
										zIndex={0}
										color={"gray.400"}
										className="description"
									>
										<Link href={`/read/${id}`} passHref>
											{description.repeat(6)}
										</Link>
									</Text>
								</Tooltip>
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

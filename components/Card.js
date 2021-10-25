import { Image } from "@chakra-ui/image"
import { Badge, Box, Heading, Stack } from "@chakra-ui/layout"
import { Flex, Spacer, Avatar } from "@chakra-ui/react";
import Link from 'next/link';
import Votes from "./Votes";


const Card = (props) => {
    return (
			<Link href={"/read/" + props.id}>
				<Box
					maxW="sm"
					borderWidth="2px"
					borderRadius="lg"
					overflow="hidden"
				>
					<Image src={props.image} alt={props.alt} />
					<Box
						w="100%"
						h="5px"
						bgGradient="linear(to-r, green.200, pink.500)"
					/>
					<Box p="6">
						<Stack direction="row">
							{props.tags.map((tag) => (
								<Badge key={tag.id} colorScheme={tag.color}>
									{tag.name}
								</Badge>
							))}
						</Stack>

						<Heading>{props.title}</Heading>
					</Box>
					<Flex align="center" p="1">
						<Votes vote="up" voteCount={25632} />
						<Spacer />
						<Link href={"/user/" + props.author.name}>
							<Avatar
								mr="3"
								mb="2"
								name={props.author.name}
								src={props.author.image}
							/>
						</Link>
					</Flex>
				</Box>
			</Link>
		);
}

export default Card;
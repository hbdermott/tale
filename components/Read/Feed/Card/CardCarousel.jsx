import {
	Box, HStack,
} from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { ArrowRight } from "@styled-icons/fluentui-system-filled";

const CardCarousel = ({ children }) => {
	return (
		<Box bg="#333333" position="relative" m={10} rounded="xl" py={6}>
			<Box
				position="absolute"
				bg="#333333EE"
				top="0"
				left="0"
				zIndex={10}
				roundedLeft="xl"
				h="full"
				px="5"
			/>
			<Box
				position="absolute"
				bg="#333333EE"
				top="0"
				right="0"
				zIndex={10}
				roundedRight="xl"
				h="full"
				px="5"
			/>
			{/* <Box
				position="absolute"
				bg="#333333EE"
				top="0"
				left="0"
				// zIndex={10}
				roundedTop="xl"
				py={5}
				w="100%"
				mx={0}
			/>
			<Box
				position="absolute"
				bg="#333333EE"
				bottom="0"
				left="0"
				// zIndex={10}
				roundedBottom="xl"
				py={5}
				w="100%"
				mx={0}
			/> */}
            <IconButton variant="overlay" zIndex="20" position="absolute" right="10px" top="0" bottom="0" my="auto" icon={<ArrowRight size="24px"/>}/>
			<HStack spacing={10} px={10} overflowX={"auto"} cursor="grab" overflowY={"hidden"}>
				{children}
			</HStack>
		</Box>
	);
};

export default CardCarousel;

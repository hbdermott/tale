import { Flex, HStack, Stack, VStack } from "@chakra-ui/layout";
import { Button, IconButton, Menu, MenuButton, MenuList, useBreakpointValue } from "@chakra-ui/react";
import { useColorModeValue, useMultiStyleConfig } from "@chakra-ui/system";
import { ArrowSortDown } from "@styled-icons/fluentui-system-filled";
import { AlignCenter, AlignLeft, AlignRight, Bold, Continue, Header1, Header2, Header3, Image, IndentIncrease, Italic, Link, Navigation, Quote, Redo, Strikethrough, Underline, Undo } from "../../Icons";
const Toolbar = ({editor, publish, toolbarToggle}) => {
	const bg = useColorModeValue("#33333355", "gray.900");
	return (
		<Flex
			justify="space-between"
			boxShadow="dark-lg"
			bg={bg}
			w="full"
			px="6"
			py="2"
			roundedTop="xl"
		>
			<HStack>
				<IconButton
					variant="inset"
					onClick={() => editor.chain().focus().undo().run()}
				>
					<Undo />
				</IconButton>
				<IconButton
					variant="inset"
					onClick={() => editor.chain().focus().redo().run()}
				>
					<Redo />
				</IconButton>
			</HStack>
			<IconButton variant="inset" onClick={toolbarToggle}><Navigation/></IconButton>
			<Button variant="submit" rightIcon={<Continue />} onClick={publish}>
				Next
			</Button>
		</Flex>
	);
};

export default Toolbar;


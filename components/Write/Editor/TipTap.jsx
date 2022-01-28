import { useEditor, EditorContent } from "@tiptap/react";
import Blockquote from "@tiptap/extension-blockquote";
import Document from "@tiptap/extension-document";
import HardBreak from "@tiptap/extension-hard-break";
import Heading from "@tiptap/extension-heading";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Image from "@tiptap/extension-image";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import History from "@tiptap/extension-history";
import Dropcursor from "@tiptap/extension-dropcursor";
import { TrailingNode } from "./TrailingNode";
import Menus from "./Menus";
import { Box, Center, Flex, Heading as  Title } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/system";
import Likes from "../../Read/Feed/Card/Likes";
import Placeholder from "@tiptap/extension-placeholder";

const Tiptap = ({book, editable = true, userData}) => {
	const bg = useColorModeValue("#E2E4E6", "#2D3540");
	const toolbarBG = useColorModeValue("#33333355", "gray.900");
	const editor = useEditor({
		editable,
		extensions: [
			Document,
			Paragraph,
			Text,
			Heading.configure({
				levels: [1, 2, 3],
			}),
			HorizontalRule,
			Blockquote,
			HardBreak,
			Image,
			Bold,
			Italic,
			Underline,
			Strike,
			Placeholder.configure({
				placeholder: ({ node }) => {
					if (node.type.name === "heading") {
						return "What’s the title?";
					} else if (node.type.name === "paragraph") {
						return "What’s the content?";
					} else if (node.type.name === "blockquote") {
						return "What’s the quote?";
					}
					return "Where am I?";
				},
			}),
			Link,
			TextAlign.configure({
				types: ["heading", "paragraph", "blockquote"],
			}),
			Typography,
			History,
			Dropcursor,
			TrailingNode,
		],
		content: book?.content || "<p></p><p></p><p></p><p></p>",
		autofocus: true,
	});

	return (
		<>
			<Box
				w={{ base: "95%", lg: "85%", xl: "70%", "2xl": "60%" }}
				bg={bg}
				h={"100%"}
				alignSelf={"center"}
				mt={3}
				boxShadow="dark-lg"
				roundedTop="xl"
			>
				{!editable && (
					<Flex
						justify="space-between"
						alignItems={"center"}
						bg={toolbarBG}
						w="full"
						px="6"
						py="2"
					>
						<Title fontSize="2xl">{book?.title}</Title>
						<Likes bookID={book?.id} likes={book?.likes} {...userData} />
					</Flex>
				)}
				{editor && editable && <Menus editor={editor} book={book} />}
				<Box
					w={{ base: "95%", lg: "85%", xl: "70%", "2xl": "60%" }}
					h={"80%"}
					className="editor-container"
					position="fixed"
					overflow="auto"
					bg={bg}
					cursor="text"
				>
					<EditorContent editor={editor} />
				</Box>
			</Box>
			{/* </Box> */}
		</>
	);
    
};

export default Tiptap;

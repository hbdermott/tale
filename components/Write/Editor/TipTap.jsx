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
import { Box, Center, Flex, Heading as  Title, VStack } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/system";
import Likes from "../../Read/Feed/Card/Likes";
import Placeholder from "@tiptap/extension-placeholder";
import { IconButton } from "@chakra-ui/react";
import {
	AlignCenter,
	AlignLeft,
	AlignRight,
	Bold as BoldIcon,
	Continue,
	Header1,
	Header2,
	Header3,
	Image as ImageIcon,
	IndentIncrease,
	Italic as ItalicIcon,
	Link as LinkIcon,
	Navigation,
	Quote,
	Redo,
	Strikethrough,
	Underline as UnderlineIcon,
	Undo,
} from "../../Icons";
import { useEffect, useState } from "react";

const Tiptap = ({book, editable = true, userData}) => {
	const bg = useColorModeValue("#E2E4E6", "#2D3540");
	const toolbarBG = useColorModeValue("#33333355", "gray.900");
	const [visibleToolbar, setVisibleToolbar] = useState(false);

	const toggleToolbar = () => {
		if (editor)
			editor.commands.focus();
		setVisibleToolbar(!visibleToolbar);
	}
	const importImage = () => {
			setImportType("Image");
			onOpen();
		};
		const importLink = () => {
			setImportType("Link");
			onOpen();
		};
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
		useEffect(() => {
			if (editable && editor && !book) {
				const tempContent = localStorage.getItem("tempWritingContent");
				editor.commands.setContent(tempContent);
			}
			return () => {
				if (editable && editor)
					localStorage.setItem("tempWritingContent", editor.getHTML());
			};
		}, [editable, editor, book]);
	return (
		<>
			<Box
				w={{ base: "95%", lg: "85%", xl: "70%", "2xl": "60%" }}
				bg={bg}
				h={"100%"}
				alignSelf={"center"}
				// mt={3}
				position={'relative'}
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
				{editor && editable && (
					<>
					<Menus editor={editor} book={book} handler={toggleToolbar} />
					<Flex
						position={"absolute"}
						// transition="all 0.3s ease-in-out"
						// top=""
						visibility={visibleToolbar ? "visible" : "hidden"}
						right="0px"
						h={"94%"}
						py={5}
						px={1}
						boxShadow={'2xl'}
						bg="gray.900"
						// opacity={0.7}
						direction="column"
						justify={"space-between"}
						zIndex={500}
					>
						<VStack>
							<IconButton
								variant="inset"
								onClick={() =>
									editor.chain().focus().toggleHeading({ level: 1 }).run()
								}
								className={
									editor.isActive("heading", { level: 1 }) ? "is-active" : ""
								}
							>
								<Header1 />
							</IconButton>
							<IconButton
								variant="inset"
								onClick={() =>
									editor.chain().focus().toggleHeading({ level: 2 }).run()
								}
								className={
									editor.isActive("heading", { level: 2 }) ? "is-active" : ""
								}
							>
								<Header2 />
							</IconButton>
							<IconButton
								variant="inset"
								onClick={() =>
									editor.chain().focus().toggleHeading({ level: 3 }).run()
								}
								className={
									editor.isActive("heading", { level: 3 }) ? "is-active" : ""
								}
							>
								<Header3 />
							</IconButton>
							<IconButton
								variant="inset"
								onClick={() => editor.chain().focus().toggleBlockquote().run()}
								className={editor.isActive("blockqoute") ? "is-active" : ""}
							>
								<Quote />
							</IconButton>
						</VStack>
						<VStack>
							<IconButton
								variant="inset"
								onClick={() =>
									editor.chain().focus().setTextAlign("left").run()
								}
							>
								<AlignLeft />
							</IconButton>
							<IconButton
								variant="inset"
								onClick={() =>
									editor.chain().focus().setTextAlign("center").run()
								}
							>
								<AlignCenter />
							</IconButton>
							<IconButton
								variant="inset"
								onClick={() =>
									editor.chain().focus().setTextAlign("right").run()
								}
							>
								<AlignRight />
							</IconButton>
							{/* <IconButton variant="inset">
					<IndentIncrease />
				</IconButton> */}
						</VStack>
						<VStack>
							<IconButton
								variant="inset"
								onClick={() => editor.chain().focus().toggleBold().run()}
								className={editor.isActive("bold") ? "is-active" : ""}
							>
								<BoldIcon />
							</IconButton>
							<IconButton
								variant="inset"
								onClick={() => editor.chain().focus().toggleItalic().run()}
								className={editor.isActive("italic") ? "is-active" : ""}
							>
								<ItalicIcon />
							</IconButton>
							<IconButton
								variant="inset"
								onClick={() => editor.chain().focus().toggleUnderline().run()}
								className={editor.isActive("underline") ? "is-active" : ""}
							>
								<UnderlineIcon />
							</IconButton>
							<IconButton
								variant="inset"
								onClick={() => editor.chain().focus().toggleStrike().run()}
								className={editor.isActive("strike") ? "is-active" : ""}
							>
								<Strikethrough />
							</IconButton>
						</VStack>
						{/* <VStack>
							<IconButton
								variant="inset"
								onClick={importLink}
								className={editor.isActive("link") ? "is-active" : ""}
							>
								<LinkIcon />
							</IconButton>
							<IconButton variant="inset" onClick={importImage}>
								<ImageIcon />
							</IconButton>
						</VStack> */}
					</Flex>
					</>
					
				)}
				<Box
					w={{ base: "95%", lg: "85%", xl: "70%", "2xl": "60%" }}
					h={"82%"}
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

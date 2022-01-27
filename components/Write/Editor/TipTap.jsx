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
import { Box, Center, Flex } from "@chakra-ui/layout";

const Tiptap = ({book, editable = true}) => {

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
			Link,
			TextAlign.configure({
				types: ["heading", "paragraph", "blockquote"],
			}),
			Typography,
			History,
			Dropcursor,
			TrailingNode,
		],
		content: book?.content || "<p></p><p></p><p></p><p></p><p></p><p></p>",
		autofocus: true,
	});

	return (
		<>
			<Box
				w={{ base: "95%", lg: "85%", xl: "75%", "2xl": "70%" }}
				h="100%"
				maxH="100%"
				mt={{ base: "3", md: "5", lg: "10" }}
			>
				{editor && editable && <Menus editor={editor} book={book} />}
				<Box
					// p={10}
					h={{ base: "80%", lg: "70%", xl: "60%" }}
					w={{ base: "95%", lg: "85%", xl: "75%", "2xl": "70%" }}
					// pb="10"
					position="fixed"
					// borderX={{ base: "none", lg: "2px solid gray" }}
					// borderBottom={{ base: "none", lg: "2px solid gray" }}
					roundedBottom={"xl"}
					overflow="auto"
					bg="#33333333"
					boxShadow="dark-lg"
					backdropFilter={`blur(10px)`}
					className="editor-container"
					cursor="pointer"
					// onClick={() => editor.commands.focus()}
				>
					<EditorContent editor={editor} />
				</Box>
			</Box>
			{/* </Box> */}
		</>
	);
    
};

export default Tiptap;

import { useEditor, EditorContent, FloatingMenu } from "@tiptap/react";
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
import Placeholder from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import History from "@tiptap/extension-history";
import Dropcursor from "@tiptap/extension-dropcursor";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import { Button, useDisclosure } from "@chakra-ui/react";
import ModalImage from "../ModalImage";
import { TrailingNode } from "./TrailingNode";

const Tiptap = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
	const editor = useEditor({
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
			TextAlign,
			// Placeholder.configure({
            //     // includeChildren: true,
			// 	placeholder: ({ node }) => {
			// 	  if (node.type.name === 'heading') {
			// 	    return 'What’s the title?'
			// 	  }
            //       if(node.type.name === 'paragraph') {
            //         return 'What’s the content?'
            //       }
            //       if(node.type.name === 'blockqoute') {
            //         return 'What’s the quote?'
            //       }
			// 	  return 'Can you add some further context?'
			// 	},
			// }),
			Typography,
			History,
			FloatingMenu,
			Dropcursor,
			BubbleMenu,
            TrailingNode
		],
		content: "<p>Hello World!</p>",
		autofocus: true,
        editable: true,
        // injectCSS: false,
	});

	return (
		<>
			{editor && (
				<FloatingMenu editor={editor}>
					<Button
						p={0}
						m={2}
						size="md"
						fontSize="lg"
						variant="overlay"
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 1 }).run()
						}
						className={
							editor.isActive("heading", { level: 1 }) ? "is-active" : ""
						}
					>
						h1
					</Button>
					<Button
						onClick={() =>
							editor.chain().focus().toggleHeading({ level: 2 }).run()
						}
						className={
							editor.isActive("heading", { level: 2 }) ? "is-active" : ""
						}
					>
						h2
					</Button>
					<Button
						onClick={() => editor.chain().focus().toggleBlockquote().run()}
						className={editor.isActive("blockqoute") ? "is-active" : ""}
					></Button>
					<Button
						onClick={() => onOpen()}
						className={editor.isActive("blockqoute") ? "is-active" : ""}
					>Image</Button>
				</FloatingMenu>
			)}
            <ModalImage editor={editor} isOpen={isOpen} onClose={onClose} />
			<EditorContent editor={editor} />
		</>
	);
    
};

export default Tiptap;

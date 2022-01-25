import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from "@tiptap/react";
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
import { Button, useDisclosure } from "@chakra-ui/react";
import ModalImage from "../ModalImage";
import { TrailingNode } from "./TrailingNode";
import { useState } from "react";

const Tiptap = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [handler, setHandler] = useState(null);
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
			Typography,
			History,
			Dropcursor,
            TrailingNode
		],
		content: "",
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
						onClick={() => {
                            setHandler("Image");
                            onOpen();
                        }}
					>
						Image
					</Button>
				</FloatingMenu>
			)}
			{editor && (
				<BubbleMenu editor={editor}>
					<Button
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={editor.isActive("bold") ? "is-active" : ""}
					>
						bold
					</Button>
					<Button
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={editor.isActive("italic") ? "is-active" : ""}
					>
						italic
					</Button>
					<Button
						onClick={() => editor.chain().focus().toggleUnderline().run()}
						className={editor.isActive("strike") ? "is-active" : ""}
					>
						underline
					</Button>
					<Button
						onClick={() => {
                            setHandler('Link');
                            onOpen();
                        }}
						className={editor.isActive("link") ? "is-active" : ""}
					>
						Link
					</Button>
				</BubbleMenu>
			)}
			<ModalImage editor={editor} type={handler} isOpen={isOpen} onClose={onClose} />
			<EditorContent editor={editor} />
		</>
	);
    
};

export default Tiptap;

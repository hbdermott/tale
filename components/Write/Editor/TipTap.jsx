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
import { TrailingNode } from "./TrailingNode";
import { useEffect, useState } from "react";
import Publish from "../Publish";
import ModalImport from "../ModalImport";

const Tiptap = ({book, editable = true}) => {
    const [ImportType, setImportType] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen: isOpenPublish, onOpen: onOpenPublish, onClose: onClosePublish } = useDisclosure();
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
			TextAlign,
			Typography,
			History,
			Dropcursor,
            TrailingNode
		],
		content: book?.content || '',
		autofocus: true,
	});

	return (
		<>
			{editor && editable && (
				<>
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
								setImportType("Image");
								onOpen();
							}}
						>
							Image
						</Button>
					</FloatingMenu>
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
								setImportType("Link");
								onOpen();
							}}
							className={editor.isActive("link") ? "is-active" : ""}
						>
							Link
						</Button>
					</BubbleMenu>
					<Button onClick={() => onOpenPublish()} />
					<ModalImport
						editor={editor}
						type={ImportType}
						isOpen={isOpen}
						onClose={onClose}
					/>
					<Publish
						editor={editor}
						book={book}
						isOpen={isOpenPublish}
						onClose={onClosePublish}
					/>
				</>
			)}
			<EditorContent editor={editor} />
		</>
	);
    
};

export default Tiptap;

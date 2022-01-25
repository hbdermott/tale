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
import Placeholder from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import History from "@tiptap/extension-history";
import FloatingMenu from "@tiptap/extension-floating-menu";
import Dropcursor from "@tiptap/extension-dropcursor";
import BubbleMenu from "@tiptap/extension-bubble-menu";

const Tiptap = () => {
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
			Placeholder.configure({
				// Use a placeholder:
				placeholder: "Write something …",
				// Use different placeholders depending on the node type:
				// placeholder: ({ node }) => {
				//   if (node.type.name === 'heading') {
				//     return 'What’s the title?'
				//   }

				//   return 'Can you add some further context?'
				// },
			}),
			Typography,
			History,
			FloatingMenu,
			Dropcursor,
			BubbleMenu,
		],
		content: "<p>Hello World!</p>",
		autofocus: true,
        editable: true,
        // injectCSS: false,
	});

	return <EditorContent editor={editor} />;
};

export default Tiptap;

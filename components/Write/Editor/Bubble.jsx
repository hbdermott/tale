import { IconButton } from "@chakra-ui/react";
import { BubbleMenu } from "@tiptap/react";
import { Bold, Italic, Link, Underline } from "../../Icons";

const Bubble = ({editor, importLink}) => {
    return (
			<BubbleMenu editor={editor}>
				<IconButton
					onClick={() => editor.chain().focus().toggleBold().run()}
					className={editor.isActive("bold") ? "is-active" : ""}
				>
					<Bold/>
				</IconButton>
				<IconButton
					onClick={() => editor.chain().focus().toggleItalic().run()}
					className={editor.isActive("italic") ? "is-active" : ""}
				>
					<Italic/>
				</IconButton>
				<IconButton
					onClick={() => editor.chain().focus().toggleUnderline().run()}
					className={editor.isActive("underline") ? "is-active" : ""}
				>
					<Underline/>
				</IconButton>
				<IconButton
					onClick={importLink}
					className={editor.isActive("link") ? "is-active" : ""}
				>
					<Link/>
				</IconButton>
			</BubbleMenu>
		);
}

export default Bubble;
import { IconButton } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/layout";
import { BubbleMenu } from "@tiptap/react";
import { Bold, Italic, Link, Underline } from "../../Icons";

const Bubble = ({editor, importLink}) => {
    return (
			<BubbleMenu editor={editor}>
				<HStack spacing={1}>
					<IconButton
						size="md"
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={editor.isActive("bold") ? "is-active" : ""}
					>
						<Bold />
					</IconButton>
					<IconButton
						size="md"
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={editor.isActive("italic") ? "is-active" : ""}
					>
						<Italic />
					</IconButton>
					<IconButton
						size="md"
						onClick={() => editor.chain().focus().toggleUnderline().run()}
						className={editor.isActive("underline") ? "is-active" : ""}
					>
						<Underline />
					</IconButton>
					<IconButton
						size="md"
						onClick={importLink}
						className={editor.isActive("link") ? "is-active" : ""}
					>
						<Link />
					</IconButton>
				</HStack>
			</BubbleMenu>
		);
}

export default Bubble;
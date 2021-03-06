import { IconButton } from "@chakra-ui/react";
import { FloatingMenu } from "@tiptap/react";
import { Header1, Header2, Image, Quote } from "../../Icons";
import { HStack } from "@chakra-ui/layout";
const Floating = ({editor, importImage}) => {
    return (
			<FloatingMenu editor={editor}>
				<HStack spacing={1}>
					<IconButton
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
						onClick={() => editor.chain().focus().toggleBlockquote().run()}
						className={editor.isActive("blockqoute") ? "is-active" : ""}
					>
						<Quote />
					</IconButton>
					<IconButton onClick={importImage}>
						<Image />
					</IconButton>
				</HStack>
			</FloatingMenu>
		);
}

export default Floating;
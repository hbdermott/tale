import { Flex, HStack, Stack } from "@chakra-ui/layout";
import { Button, IconButton, Menu, MenuButton, MenuList, useBreakpointValue } from "@chakra-ui/react";
import { useColorModeValue, useMultiStyleConfig } from "@chakra-ui/system";
import { ArrowSortDown } from "@styled-icons/fluentui-system-filled";
import { AlignCenter, AlignLeft, AlignRight, Bold, Continue, Header1, Header2, Header3, Image, IndentIncrease, Italic, Link, Quote, Redo, Strikethrough, Underline, Undo } from "../../Icons";
const Toolbar = ({editor, publish, importImage, importLink}) => {
	const small = useBreakpointValue({base: true, xl: false})
	const bg = useColorModeValue("#33333355", "gray.900");
	return (
		<Flex
			justify="space-between"
			boxShadow="dark-lg"
			bg={bg}
			w="full"
			px="6"
			py="2"
			roundedTop="xl"
		>
			<HStack>
				<IconButton
					variant="inset"
					onClick={() => editor.chain().focus().undo().run()}
				>
					<Undo />
				</IconButton>
				<IconButton
					variant="inset"
					onClick={() => editor.chain().focus().redo().run()}
				>
					<Redo />
				</IconButton>
			</HStack>
			{!small && (
				<HStack>
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
				</HStack>
			)}

			<HStack>
				<IconButton
					variant="inset"
					onClick={() => editor.chain().focus().setTextAlign("left").run()}
				>
					<AlignLeft />
				</IconButton>
				<IconButton
					variant="inset"
					onClick={() => editor.chain().focus().setTextAlign("center").run()}
				>
					<AlignCenter />
				</IconButton>
				<IconButton
					variant="inset"
					onClick={() => editor.chain().focus().setTextAlign("right").run()}
				>
					<AlignRight />
				</IconButton>
				{/* <IconButton variant="inset">
					<IndentIncrease />
				</IconButton> */}
			</HStack>
			{!small && (
				<>
					<HStack>
						<IconButton
							variant="inset"
							onClick={() => editor.chain().focus().toggleBold().run()}
							className={editor.isActive("bold") ? "is-active" : ""}
						>
							<Bold />
						</IconButton>
						<IconButton
							variant="inset"
							onClick={() => editor.chain().focus().toggleItalic().run()}
							className={editor.isActive("italic") ? "is-active" : ""}
						>
							<Italic />
						</IconButton>
						<IconButton
							variant="inset"
							onClick={() => editor.chain().focus().toggleUnderline().run()}
							className={editor.isActive("underline") ? "is-active" : ""}
						>
							<Underline />
						</IconButton>
						<IconButton
							variant="inset"
							onClick={() => editor.chain().focus().toggleStrike().run()}
							className={editor.isActive("strike") ? "is-active" : ""}
						>
							<Strikethrough />
						</IconButton>
					</HStack>
					<HStack>
						<IconButton
							variant="inset"
							onClick={importLink}
							className={editor.isActive("link") ? "is-active" : ""}
						>
							<Link />
						</IconButton>
						<IconButton variant="inset" onClick={importImage}>
							<Image />
						</IconButton>
					</HStack>
				</>
			)}

			<Button variant="submit" rightIcon={<Continue />} onClick={publish}>
				Next
			</Button>
		</Flex>
	);
};

export default Toolbar;


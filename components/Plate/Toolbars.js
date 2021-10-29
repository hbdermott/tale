import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import React from "react";
import { CodeAlt } from "@styled-icons/boxicons-regular/CodeAlt";
import { CodeBlock } from "@styled-icons/boxicons-regular/CodeBlock";
import { Highlight } from "@styled-icons/boxicons-regular/Highlight";
import { Subscript } from "@styled-icons/foundation/Subscript";
import { Superscript } from "@styled-icons/foundation/Superscript";
import { BorderAll } from "@styled-icons/material/BorderAll";
import { BorderBottom } from "@styled-icons/material/BorderBottom";
import { BorderClear } from "@styled-icons/material/BorderClear";
import { BorderLeft } from "@styled-icons/material/BorderLeft";
import { BorderRight } from "@styled-icons/material/BorderRight";
import { BorderTop } from "@styled-icons/material/BorderTop";
import { FormatAlignCenter } from "@styled-icons/material/FormatAlignCenter";
import { FormatAlignJustify } from "@styled-icons/material/FormatAlignJustify";
import { FormatAlignLeft } from "@styled-icons/material/FormatAlignLeft";
import { FormatAlignRight } from "@styled-icons/material/FormatAlignRight";
import { FormatBold } from "@styled-icons/material/FormatBold";
import { FormatIndentDecrease } from "@styled-icons/material/FormatIndentDecrease";
import { FormatIndentIncrease } from "@styled-icons/material/FormatIndentIncrease";
import { FormatItalic } from "@styled-icons/material/FormatItalic";
import { FormatListBulleted } from "@styled-icons/material/FormatListBulleted";
import { FormatListNumbered } from "@styled-icons/material/FormatListNumbered";
import { FormatQuote } from "@styled-icons/material/FormatQuote";
import { FormatStrikethrough } from "@styled-icons/material/FormatStrikethrough";
import { FormatUnderlined } from "@styled-icons/material/FormatUnderlined";
import { Keyboard } from "@styled-icons/material/Keyboard";
import { Looks3 } from "@styled-icons/material/Looks3";
import { Looks4 } from "@styled-icons/material/Looks4";
import { Looks5 } from "@styled-icons/material/Looks5";
import { Looks6 } from "@styled-icons/material/Looks6";
import { LooksOne } from "@styled-icons/material/LooksOne";
import { LooksTwo } from "@styled-icons/material/LooksTwo";
import {
	addColumn,
	addRow,
	BalloonToolbar,
	deleteColumn,
	deleteRow,
	deleteTable,
	ELEMENT_BLOCKQUOTE,
	ELEMENT_CODE_BLOCK,
	ELEMENT_H1,
	ELEMENT_H2,
	ELEMENT_H3,
	ELEMENT_H4,
	ELEMENT_H5,
	ELEMENT_H6,
	ELEMENT_OL,
	ELEMENT_UL,
	getPlatePluginType,
	getPreventDefaultHandler,
	indent,
	insertTable,
	MARK_BOLD,
	MARK_CODE,
	MARK_HIGHLIGHT,
	MARK_ITALIC,
	MARK_KBD,
	MARK_STRIKETHROUGH,
	MARK_SUBSCRIPT,
	MARK_SUPERSCRIPT,
	MARK_UNDERLINE,
	outdent,
	ToolbarButton,
	ToolbarCodeBlock,
	ToolbarList,
	ToolbarTable,
	useEventEditorId,
	useStoreEditorRef,
} from "@udecode/plate";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import MarkButton from "./ToolbarButtons/MarkButton.jsx";
import AlignButton from "./ToolbarButtons/AlignButton.jsx";
import ToolButton from "./ToolbarButtons/ToolButton.jsx";
import ElementButton from "./ToolbarButtons/ElementButton.jsx";
import ListButton from "./ToolbarButtons/ListButton.jsx";

// export const ToolbarButtons = () => {
// 	const editor = useStoreEditorRef(useEventEditorId("focus"))

	
// }

export const ToolbarButtonsBasicElements = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));

	return (
		<>
			<ElementButton editor={editor} type={ELEMENT_H1} icon={<LooksOne />} />
			<ElementButton editor={editor} type={ELEMENT_H2} icon={<LooksTwo />} />
			<ElementButton editor={editor} type={ELEMENT_H3} icon={<Looks3 />} />
			<ElementButton editor={editor} type={ELEMENT_H4} icon={<Looks4 />} />
			<ElementButton editor={editor} type={ELEMENT_H5} icon={<Looks5 />} />
			<ElementButton editor={editor} type={ELEMENT_H6} icon={<Looks6 />} />
			<ElementButton
				editor={editor}
				type={ELEMENT_BLOCKQUOTE}
				icon={<FormatQuote />}
			/>
			{/* <ToolbarCodeBlock
				editor={editor}
				type={ELEMENT_CODE_BLOCK}
				icon={<CodeBlock />}
			/> */}
		</>
	);
};

export const ToolbarButtonsIndent = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));

	return (
		<>
			<ToolButton
				onMouseDown={editor && getPreventDefaultHandler(outdent, editor)}
				icon={<FormatIndentDecrease />}
			/>
			<ToolButton
				onMouseDown={editor && getPreventDefaultHandler(indent, editor)}
				icon={<FormatIndentIncrease />}
			/>
		</>
	);
};

export const ToolbarButtonsList = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));

	return (
		<>
			<ListButton
				type={getPlatePluginType(editor, ELEMENT_UL)}
				icon={<FormatListBulleted />}
			/>
			<ListButton
				type={getPlatePluginType(editor, ELEMENT_OL)}
				icon={<FormatListNumbered />}
			/>
		</>
	);
};

export const ToolbarButtonsAlign = () => {
	return (
		<>
			<AlignButton align="left" icon={<FormatAlignLeft />} />
			<AlignButton align="center" icon={<FormatAlignCenter />} />
			<AlignButton align="right" icon={<FormatAlignRight />} />
			<AlignButton align="justify" icon={<FormatAlignJustify />} />
		</>
	);
};

export const ToolbarButtonsBasicMarks = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));

	return (
		<>
			<MarkButton editor={editor} type={MARK_BOLD} icon={<FormatBold />} />
			<MarkButton
				editor={editor}
				type={MARK_ITALIC}
				icon={<FormatItalic />}
			/>
			<MarkButton
				editor={editor}
				type={MARK_UNDERLINE}
				icon={<FormatUnderlined />}
			/>
			<MarkButton
				editor={editor}
				type={MARK_STRIKETHROUGH}
				icon={<FormatStrikethrough />}
			/>
			<MarkButton
				editor={editor}
				type={MARK_CODE}
				icon={<CodeAlt />}
			/>
			<MarkButton
				editor={editor}
				type={MARK_SUPERSCRIPT}
				clear={MARK_SUBSCRIPT}
				icon={<Superscript />}
			/>
			<MarkButton
				editor={editor}
				type={MARK_SUBSCRIPT}
				clear={MARK_SUPERSCRIPT}
				icon={<Subscript />}
			/>
		</>
	);
};

export const ToolbarKbd = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));

	return (
		<MarkButton
			type={getPlatePluginType(editor, MARK_KBD)}
			icon={<Keyboard />}
		/>
	);
};

export const ToolbarHighlight = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));

	return (
		<MarkButton
			type={getPlatePluginType(editor, MARK_HIGHLIGHT)}
			icon={<Highlight />}
		/>
	);
};

export const ToolbarButtonsTable = () => (
	<>
		<Menu>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}> Border </MenuButton>
			<MenuList>
				<MenuItem>
					<ToolbarTable icon={<BorderAll />} transform={insertTable}/>
					All Borders
				</MenuItem>
				<MenuItem>
					<ToolbarTable icon={<BorderClear />} transform={deleteTable} />
				</MenuItem>
				<MenuItem>
					<ToolbarTable icon={<BorderBottom />} transform={addRow} />
				</MenuItem>
				<MenuItem>
					<ToolbarTable icon={<BorderTop />} transform={deleteRow} />
				</MenuItem>
				<MenuItem>
					<ToolbarTable icon={<BorderLeft />} transform={addColumn} />
				</MenuItem>
				<MenuItem>
					<ToolbarTable icon={<BorderRight />} transform={deleteColumn} />
				</MenuItem>
			</MenuList>
		</Menu>
	</>
);

export const BallonToolbarMarks = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));

	const arrow = false;
	const theme = "dark";
	const tooltip = {
		arrow: true,
		delay: 0,
		duration: [200, 0],
		hideOnClick: false,
		offset: [0, 17],
		placement: "top",
	};

	return (
		<BalloonToolbar
			popperOptions={{
				placement: "top",
			}}
			theme={theme}
			arrow={arrow}
		>
			<MarkButton
				type={getPlatePluginType(editor, MARK_BOLD)}
				icon={<FormatBold />}
				tooltip={{ content: "Bold (⌘B)", ...tooltip }}
			/>
			<MarkButton
				type={getPlatePluginType(editor, MARK_ITALIC)}
				icon={<FormatItalic />}
				tooltip={{ content: "Italic (⌘I)", ...tooltip }}
			/>
			<MarkButton
				type={getPlatePluginType(editor, MARK_UNDERLINE)}
				icon={<FormatUnderlined />}
				tooltip={{ content: "Underline (⌘U)", ...tooltip }}
			/>
		</BalloonToolbar>
	);
};

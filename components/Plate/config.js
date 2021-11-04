import {
	createPlateComponents,
	createPlateOptions,
	ELEMENT_BLOCKQUOTE,
	ELEMENT_CODE_BLOCK,
	ELEMENT_H1,
	ELEMENT_H2,
	ELEMENT_H3,
	ELEMENT_HR,
	ELEMENT_IMAGE,
	ELEMENT_PARAGRAPH,
	ELEMENT_TD,
	ELEMENT_TODO_LI,
	isBlockAboveEmpty,
	isSelectionAtBlockStart,
	KEYS_HEADING,
} from "@udecode/plate";
import { autoformatRules } from "./autoformat/autoformatRules";

const resetBlockTypesCommonRule = {
	types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3],
	defaultType: ELEMENT_PARAGRAPH,
};

export const CONFIG = {
	editableProps: {
		spellCheck: true,
		autoFocus: true,
		style: {
			fontSize: "1.4rem",
		},
	},
	options: createPlateOptions(),
	components: createPlateComponents(),

	align: {
		types: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_BLOCKQUOTE],
		alignments: ['left', 'center', 'right'], 
	},
	indent: {
		types: [
			ELEMENT_PARAGRAPH,
			ELEMENT_H1,
			ELEMENT_H2,
			ELEMENT_H3,
			ELEMENT_BLOCKQUOTE,
			ELEMENT_CODE_BLOCK,
		],
	},
	lineHeight: {
		defaultLineHeight: 1.65,
		// lineHeights: [1, 1.2, 1.65, 2, 3],
	},
	initalValue: [{ children: [{ text: 'Hello' }]}],
	resetBlockType: {
		rules: [
			{
				...resetBlockTypesCommonRule,
				hotkey: "Enter",
				predicate: isBlockAboveEmpty,
			},
			{
				...resetBlockTypesCommonRule,
				hotkey: "Backspace",
				predicate: isSelectionAtBlockStart,
			},
		],
	},
	trailingBlock: { type: ELEMENT_PARAGRAPH },
	softBreak: {
		rules: [
			{ hotkey: "shift+enter" },
			{
				hotkey: "enter",
				query: {
					allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
				},
			},
		],
	},
	exitBreak: {
		rules: [
			{
				hotkey: "enter",
			},
			{
				hotkey: "mod+shift+enter",
				before: true,
			},
			{
				hotkey: "mod+enter",
				query: {
					start: true,
					end: true,
					allow: KEYS_HEADING,
				},
			},
		],
	},
	selectOnBackspace: { allow: [ELEMENT_IMAGE, ELEMENT_HR] },
	autoformat: {
		rules: autoformatRules,
	},
};

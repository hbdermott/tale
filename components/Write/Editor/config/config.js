import {
	ELEMENT_BLOCKQUOTE,
	ELEMENT_H1,
	ELEMENT_H2,
	ELEMENT_H3,
	ELEMENT_HR,
	ELEMENT_IMAGE,
	ELEMENT_PARAGRAPH,
	isBlockAboveEmpty,
	isSelectionAtBlockStart,
	KEYS_HEADING,
} from "@udecode/plate";
import { autoformatRules } from "./autoformat/autoformatRules";

const resetBlockTypesCommonRule = {
	types: [ELEMENT_BLOCKQUOTE, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3],
	defaultType: ELEMENT_PARAGRAPH,
};

export const CONFIG = {
	editableProps: {
		spellCheck: true,
		autoFocus: true,
		style: {
			fontSize: "1.4rem",
			// zIndex: "-1",
		},
	},
	readOnly: {
		readOnly: true,
		style: {
			fontSize: "1.4rem",
			// zIndex: "-1",
		},
	},

	align: {
		inject: {
			props: {
				validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3],
			},
		},
	},
	indent: {
		inject: {
			props: {
				validTypes: [
					ELEMENT_PARAGRAPH,
					ELEMENT_H1,
					ELEMENT_H2,
					ELEMENT_H3,
					ELEMENT_BLOCKQUOTE,
				],
			},
		},
	},
	lineHeight: {
		inject: {
			props: {
				defaultNodeValue: 1.5,
				validNodeValues: [1, 1.2, 1.5, 2, 3],
				validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3],
			},
		},
	},
	resetBlockType: {
		options: {
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
	},
	trailingBlock: { type: ELEMENT_PARAGRAPH },
	softBreak: {
		options: {
			rules: [
				{ hotkey: "shift+enter" },
				{
					hotkey: "enter",
					query: {
						allow: [ELEMENT_BLOCKQUOTE],
					},
				},
			],
		},
	},
	exitBreak: {
		options: {
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
	},
	selectOnBackspace: {
		options: {
			query: {
				allow: [ELEMENT_IMAGE, ELEMENT_HR],
			},
		},
	},
	autoformat: {
		rules: autoformatRules,
	},
};

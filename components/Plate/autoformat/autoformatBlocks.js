import {
  ELEMENT_BLOCKQUOTE,
  ELEMENT_DEFAULT,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_HR,
  insertNodes,
  setNodes,
} from '@udecode/plate';
import { unwrapList } from '@udecode/plate-list';
export const autoformatBlocks = [
	{
		mode: "block",
		type: ELEMENT_H1,
		match: "# ",
		preFormat: unwrapList,
	},
	{
		mode: "block",
		type: ELEMENT_H2,
		match: "## ",
		preFormat: unwrapList,
	},
	{
		mode: "block",
		type: ELEMENT_H3,
		match: "### ",
		preFormat: unwrapList,
	},
	{
		mode: "block",
		type: ELEMENT_BLOCKQUOTE,
		match: "> ",
		preFormat: unwrapList,
	},
	{
		mode: "block",
		type: ELEMENT_BLOCKQUOTE,
		match: "| ",
		preFormat: unwrapList,
	},
	{
		mode: "block",
		type: ELEMENT_HR,
		match: ["---", "—-"],
		preFormat: unwrapList,
		format: (editor) => {
			setNodes(editor, { type: ELEMENT_HR });
			insertNodes(editor, {
				type: ELEMENT_DEFAULT,
				children: [{ text: "" }],
			});
		},
	},
];

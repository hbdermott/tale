import { Text, Transforms } from "slate";
import { checkProp } from "./Is";

const toggleProp = (editor, prop) => setProp(editor, prop, true)

const setProp = (editor, prop, value) => {
	const is = checkProp(editor, prop, value);
	const toggle = {};
	toggle[prop] = is ? null : value;
	Transforms.setNodes(editor, toggle, {
		match: (n) => Text.isText(n),
		split: true,
	});
};

export {toggleProp, setProp}
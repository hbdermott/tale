import { Editor } from "slate";

const isProp = (editor, prop) => checkProp(editor, prop, true)

const checkProp = (editor, prop, value) => {
    const [match] = Editor.nodes(editor, {
			match: (n) => n[prop] === value,
			universal: true,
		});
		return !!match;
}

export {isProp, checkProp}
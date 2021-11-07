import { TextIndentDecrease, TextIndentIncrease } from "@styled-icons/fluentui-system-filled";
import { getPreventDefaultHandler } from "@udecode/plate-common";
import { useStoreEditorRef } from "@udecode/plate-core";
import { indent, outdent } from "@udecode/plate-indent";
import ToolbarButton from "../../Buttons/ToolbarButton";

export const ToolbarIndents = ({ editorID = "main-editor" }) => {
	const editor = useStoreEditorRef(editorID);
	return (
		<>
			<ToolbarButton
				onMouseDown={editor && getPreventDefaultHandler(outdent, editor)}
				icon={<TextIndentDecrease />}
			/>
			<ToolbarButton
				onMouseDown={editor && getPreventDefaultHandler(indent, editor)}
				icon={<TextIndentIncrease />}
			/>
		</>
	);
};

export default ToolbarIndents;
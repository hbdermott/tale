import { Keyboard } from "@styled-icons/fluentui-system-filled";
import { getPlatePluginType, useStoreEditorRef } from "@udecode/plate-core";
import { MARK_KBD } from "@udecode/plate-kbd";
import MarkButton from "../../Buttons/MarkButton";

const ToolbarKeyboard = ({ editorID = "main-editor" }) => {
	const editor = useStoreEditorRef(editorID);

	return (
		<MarkButton
			type={getPlatePluginType(editor, MARK_KBD)}
			icon={<Keyboard />}
		/>
	);
};

export default ToolbarKeyboard;
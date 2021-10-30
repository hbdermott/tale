import { Keyboard } from "@styled-icons/fluentui-system-filled";e
import { MARK_KBD, useEventEditorId, useStoreEditorRef } from "@udecode/plate";
import MarkButton from "../ToolbarButtons/MarkButton";

const ToolbarKeyboard = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));

	return (
		<MarkButton
			type={getPlatePluginType(editor, MARK_KBD)}
			icon={<Keyboard />}
		/>
	);
};

export default ToolbarKeyboard;
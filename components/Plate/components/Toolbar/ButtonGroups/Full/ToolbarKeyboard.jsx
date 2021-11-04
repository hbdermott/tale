import { Keyboard } from "@styled-icons/fluentui-system-filled";
import { MARK_KBD, useEventEditorId, useStoreEditorRef } from "@udecode/plate";
import MarkButton from "../../Buttons/MarkButton";

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
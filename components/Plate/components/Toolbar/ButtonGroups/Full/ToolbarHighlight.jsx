import { Highlight } from "@styled-icons/fluentui-system-filled";
import { useStoreEditorRef } from "@udecode/plate-core";
import { MARK_HIGHLIGHT } from "@udecode/plate-highlight";
import MarkButton from "../../Buttons/ToolbarMark";

const ToolbarHighlight = ({ editorID = "main-editor" }) => {
	const editor = useStoreEditorRef(editorID);

	return (
		<MarkButton
			type={getPlatePluginType(editor, MARK_HIGHLIGHT)}
			icon={<Highlight />}
		/>
	);
};

export default ToolbarHighlight;

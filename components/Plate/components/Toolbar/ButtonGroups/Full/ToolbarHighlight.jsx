import {
	MARK_HIGHLIGHT,
	useEventEditorId,
	useStoreEditorRef,
} from "@udecode/plate";
import { Highlight } from "@styled-icons/fluentui-system-filled";
import MarkButton from "../../Buttons/ToolbarMark";

const ToolbarHighlight = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));

	return (
		<MarkButton
			type={getPlatePluginType(editor, MARK_HIGHLIGHT)}
			icon={<Highlight />}
		/>
	);
};

export default ToolbarHighlight;

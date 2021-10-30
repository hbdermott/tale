import { Highlighter } from "@styled-icons/fa-solid";;
import {
	MARK_HIGHLIGHT,
	useEventEditorId,
	useStoreEditorRef,
} from "@udecode/plate";
import MarkButton from "../ToolbarButtons/MarkButton";

const ToolbarHighlight = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));

	return (
		<MarkButton
			type={getPlatePluginType(editor, MARK_HIGHLIGHT)}
			icon={<Highlighter />}
		/>
	);
};

export default ToolbarHighlight;

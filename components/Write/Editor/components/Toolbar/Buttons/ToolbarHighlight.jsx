import { Highlight } from "@styled-icons/fluentui-system-filled";
import { useStoreEditorRef } from "@udecode/plate-core";
import { MARK_HIGHLIGHT } from "@udecode/plate-highlight";
import MarkButton from "./Base/ToolbarMark";

const ToolbarHighlight = (props) => {

	return (
		<MarkButton
			typeName={MARK_HIGHLIGHT}
			{...props}
			icon={<Highlight />}
		/>
	);
};

export default ToolbarHighlight;

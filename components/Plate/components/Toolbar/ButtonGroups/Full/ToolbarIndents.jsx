import { TextIndentDecrease, TextIndentIncrease } from "@styled-icons/fluentui-system-filled";
import {
	indent,
	outdent,
	getPreventDefaultHandler,
	useEventEditorId,
	useStoreEditorRef,
} from "@udecode/plate";
import ToolbarButton from "../../Buttons/ToolbarButton";

export const ToolbarIndents = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));
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
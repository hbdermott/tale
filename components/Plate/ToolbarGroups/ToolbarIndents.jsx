import { TextIndentDecrease, TextIndentIncrease } from "@styled-icons/fluentui-system-filled";
import {
	indent,
	outdent,
	getPreventDefaultHandler,
	useEventEditorId,
	useStoreEditorRef,
} from "@udecode/plate";
import ToolButton from "../ToolbarButtons/ToolButton";

export const ToolbarIndents = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));
	return (
		<>
			<ToolButton
				onMouseDown={editor && getPreventDefaultHandler(outdent, editor)}
				icon={<TextIndentDecrease />}
			/>
			<ToolButton
				onMouseDown={editor && getPreventDefaultHandler(indent, editor)}
				icon={<TextIndentIncrease />}
			/>
		</>
	);
};

export default ToolbarIndents;
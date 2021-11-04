import { TextBulletListLtr, TextNumberListLtr } from "@styled-icons/fluentui-system-filled";
import {
	ELEMENT_OL,
	ELEMENT_UL,
	useEventEditorId,
	useStoreEditorRef,
} from "@udecode/plate";
import {
	ELEMENT_TODO_LI
} from "@udecode/plate-list"
import ListButton from "../../../../ToolbarButtons/ListButton";

export const ToolbarLists = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));
	return (
		<>
			<ListButton
				editor={editor}
				type={ELEMENT_UL}
				icon={<TextBulletListLtr />}
			/>
			<ListButton
				editor={editor}
				type={ELEMENT_OL}
				icon={<TextNumberListLtr />}
			/>
			<ListButton
				editor={editor}
				type={ELEMENT_TODO_LI}
				icon={<TextNumberListLtr />}
			/>
		</>
	);
};

export default ToolbarLists;
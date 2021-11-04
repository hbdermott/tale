import { TextBulletListLtr, TextNumberListLtr } from "@styled-icons/fluentui-system-filled";
import { useStoreEditorRef } from "@udecode/plate-core";
import {
	ELEMENT_OL,
	ELEMENT_TODO_LI, ELEMENT_UL
} from "@udecode/plate-list"
import ListButton from "../../../../ToolbarButtons/ListButton";

export const ToolbarLists = ({ editorID = "main-editor" }) => {
	const editor = useStoreEditorRef(editorID);
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
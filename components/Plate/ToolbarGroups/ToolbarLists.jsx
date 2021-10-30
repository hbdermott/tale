import { TextBulletListLtr, TextNumberListLtr } from "@styled-icons/fluentui-system-filled";
import {
	ELEMENT_OL,
	ELEMENT_UL,
	useEventEditorId,
	useStoreEditorRef,
} from "@udecode/plate";
import ListButton from "../ToolbarButtons/ListButton";

export const ToolbarLists = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));
	return (
		<>
			<ListButton
                editor={editor}
				type={ELEMENT_UL}
				icon={<TextBulletListLtr/>}
			/>
			<ListButton
                editor={editor}
				type={ELEMENT_OL}
				icon={<TextNumberListLtr />}
			/>
		</>
	);
};

export default ToolbarLists;

import {
	getPreventDefaultHandler,
	someNode,
	toggleNodeType,
} from "@udecode/plate-common";
import { getPlatePluginType, useStoreEditorRef, useStoreEditorState } from "@udecode/plate-core";
import ToolbarButton from "./ToolbarButton";

/**
 * Toolbar button to toggle the type of elements in selection.
 */
const ToolbarElement = ({
	typeName,
    editorID  = 'main-editor',
	inactiveType,
	active,
    children,
	...props
}) => {

    const editorRef = useStoreEditorRef(editorID);
    const editor = useStoreEditorState(editorID);
    const type = getPlatePluginType(editorRef, typeName);
	return (
		<ToolbarButton
			active={
				active ?? (!!editor?.selection && someNode(editor, { match: { type } }))
			}
			onMouseDown={
				editor &&
				getPreventDefaultHandler(toggleNodeType, editor, {
					activeType: type,
					inactiveType,
				})
			}
			{...props}
		>
            {children}
        </ToolbarButton>
	);
};

export default ToolbarElement;
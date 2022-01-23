
import {
	getPluginType,
	usePlateEditorRef,
	usePlateEditorState,
	getPreventDefaultHandler,
	someNode,
	toggleNodeType,
} from "@udecode/plate-core";
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

    const editorRef = usePlateEditorRef(editorID);
    const editor = usePlateEditorState(editorID);
    const type = getPluginType(editorRef, typeName);
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
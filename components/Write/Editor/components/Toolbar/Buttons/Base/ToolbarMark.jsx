import React from "react";
import {
	getPluginType,
	usePlateEditorRef,
	usePlateEditorState,
	getPreventDefaultHandler,
	isMarkActive,
	toggleMark
} from "@udecode/plate-core";
import ToolbarButton from "./ToolbarButton";

/**
 * Toolbar button to toggle the mark of the leaves in selection.
 */
const ToolbarMark = ({ editorID = "main-editor", typeName, clearName, children, ...props }) => {
	const editorRef = usePlateEditorRef(editorID);
	const editor = usePlateEditorState(editorID);
	const type = getPluginType(editorRef, typeName);
    const clear = getPluginType(editorRef, clearName);
	return (
		<ToolbarButton
			active={!!editor?.selection && isMarkActive(editor, !type)}
			onMouseDown={
			editor
				? getPreventDefaultHandler(toggleMark, editor, { key: type, clear })
				: undefined
			}
			{...props}
		>
			{children}
		</ToolbarButton>
	);
};

export default ToolbarMark;
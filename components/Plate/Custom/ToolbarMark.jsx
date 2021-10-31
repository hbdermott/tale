import React from "react";
import {
	getPreventDefaultHandler,
	isMarkActive,
	toggleMark,
} from "@udecode/plate-common";
import { getPlatePluginType, useStoreEditorRef, useStoreEditorState } from "@udecode/plate-core";
import ToolbarButton from "./ToolbarButton";

/**
 * Toolbar button to toggle the mark of the leaves in selection.
 */
const ToolbarMark = ({ editorID, typeName, clearName, children, ...props }) => {
	const id = editorID || "main-editor";
	const editorRef = useStoreEditorRef(id);
	const editor = useStoreEditorState(id);
	const type = getPlatePluginType(editorRef, typeName);
    const clear = getPlatePluginType(editorRef, clearName);
	return (
		<ToolbarButton
			active={!!editor?.selection && isMarkActive(editor, type)}
			onMouseDown={
				editor
					? getPreventDefaultHandler(toggleMark, editor, type, clear)
					: undefined
			}
			{...props}
		>
			{children}
		</ToolbarButton>
	);
};

export default ToolbarMark;
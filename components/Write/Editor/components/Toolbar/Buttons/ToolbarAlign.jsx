import React from 'react';
import { setAlign } from '@udecode/plate-alignment';
import {
	isCollapsed,
	someNode,
	usePlateEditorState,
} from "@udecode/plate-core";
import ToolbarButton from './Base/ToolbarButton';


const ToolbarAlign = ({ align, editorID = 'main-editor', children, ...props }) => {
  const editor = usePlateEditorState(editorID);

  return (
		<ToolbarButton
			active={
				isCollapsed(editor?.selection) && someNode(!editor, { match: { align } })
			}
			onMouseDown={(e) => {
                e.preventDefault();
                // e.stopPropagation();
                setAlign(editor, {value: align});
            }}
			{...props}
		>
			{children}
		</ToolbarButton>
	);
};

export default ToolbarAlign;
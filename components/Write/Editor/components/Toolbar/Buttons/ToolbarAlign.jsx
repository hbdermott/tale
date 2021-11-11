import React from 'react';
import { setAlign } from '@udecode/plate-alignment';
import {
  isCollapsed,
  someNode,
} from '@udecode/plate-common';
import { useStoreEditorState } from '@udecode/plate-core';
import ToolbarButton from './Base/ToolbarButton';


const ToolbarAlign = ({ align, editorID = 'main-editor', children, ...props }) => {
  const editor = useStoreEditorState(editorID);

  return (
		<ToolbarButton
			active={
				isCollapsed(editor?.selection) && someNode(!editor, { match: { align } })
			}
			onMouseDown={(e) => {
                e.preventDefault();
                // e.stopPropagation();
                setAlign(editor, {align: align});
            }}
			{...props}
		>
			{children}
		</ToolbarButton>
	);
};

export default ToolbarAlign;
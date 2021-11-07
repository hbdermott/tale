import React, {
    useEffect,
  useState,
} from 'react';
import { getMark, isMarkActive, setMarks } from '@udecode/plate-common';
import {
  getPlatePluginType,
  useStoreEditorRef,
  useStoreEditorState,
} from '@udecode/plate-core';
import {  Editor, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';
import { TwitterPicker } from 'react-color';
import ToolbarButton from './ToolbarButton';
import { Color } from '@styled-icons/fluentui-system-filled';

const ToolbarColorPicker = ({
    editorID = 'main-editor',
    pluginKey,
    ...rest
}) => {
  const editor = useStoreEditorState(editorID);
  const editorRef = useStoreEditorRef(editorID);
  const type = getPlatePluginType(editor, pluginKey);
  const color = editorRef && getMark(editorRef, type);
  const [selectedColor, setSelectedColor] = useState(color);
  const [visible, setVisible] = useState(false);

  useEffect(() => { 
      if(editor?.selection){
        Transforms.select(editor, editor.selection);
        ReactEditor.focus(editorRef);
        setMarks(editor, { [type]: selectedColor });
        console.log(Editor.marks(editor)?.[type])
      }
  }, [selectedColor])

  return (
      <>
        <ToolbarButton icon={<Color/>} {...rest} onMouseDown={(e) => {
					e.preventDefault();
					setVisible(!visible);
				}} />
        {visible && <TwitterPicker color={selectedColor} onChange={(color, e) => {
            e.preventDefault();
            setSelectedColor(color.hex)
            }}/>}
    </>
  );
};

export default ToolbarColorPicker;
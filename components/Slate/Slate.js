import { createEditor, Editor, Transforms } from 'slate';
import { Slate, Editable, withReact, DefaultElement } from 'slate-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import CodeElement from './Elements/Code';
import Leaf from './Leaf';
import { setProp, toggleProp } from './Commands/Toggle';
const SlateEditor = (props) => {
    const editor = useMemo(() => withReact(createEditor()), []);
	const [isLoading, setLoading] = useState(false);
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ]);

    const submitWriting = async () => {
        setLoading(true);
        const doc = await addDoc(collection(db, 'books'), {
            author: user.uid,
            content: text,
		});
		setLoading(false);
	};

    const renderElement = useCallback((props) => elementMapping(props), [])
    const renderLeaf = useCallback((props) => {
			return <Leaf {...props} />;
		}, []);

    return (
			<Slate
				editor={editor}
				value={value}
				onChange={(value) => setValue(value)}
			>
				<Editable
					onKeyDown={(e) => {
						console.log(e.key);
                        if(e.ctrlKey){
                            e.preventDefault();
                            switch(e.key){
                                case '`':
									Transforms.setNodes(
										editor,
										{ type: 'code' },
										{ match: (element) => Editor.isBlock(editor, element) }
									);
								break;
                                case 'b':
                                    toggleProp(editor, 'bold')
                                break;
                                case 'i':
                                    toggleProp(editor, 'italic')
                                break;
                                case 'u':
                                    setProp(editor, 'decoration', 'underline')
                                break;
                                case 'o':
                                    setProp(editor, 'decoration', 'overline')
                                break;
                            }
                        }
                        else{
                            switch (e.key) {
                                case "&":
                                    e.preventDefault();
                                    editor.insertText("and");
                                    break;
                            }
                        }
						
					}}
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
				/>
			</Slate>
		);
}

const elementMapping = (props) => {
    switch(props.element.type) {
        case 'code':
            return <CodeElement {...props}/>
        default:
            return <DefaultElement {...props}/>
    }
}



export default SlateEditor;
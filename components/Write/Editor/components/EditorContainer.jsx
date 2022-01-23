import { Box, Center } from "@chakra-ui/layout"
import { usePlateEditorRef } from "@udecode/plate-core";
import { ReactEditor } from "slate-react";


const EditorContainer = ({children}) => {
    const editor = usePlateEditorRef("main-editor");
    return (
			<Box
				w={{ base: "100%", lg: "85%", xl: "75%", "2xl": "70%"}}
				p={10}
				h={{ base: "100%", lg: "90%", xl: "85%"}}
				border={{ base: "none", lg: "2px solid gray" }}
				borderRadius={{ base: 0, lg: 20 }}
				overflow="auto"
				className="editor-container"
                onClick={(e) => {
                    e.preventDefault();
                    if(editor)
                        ReactEditor.focus(editor)
                }}
			>
				{children}
			</Box>
		);
}

export default EditorContainer

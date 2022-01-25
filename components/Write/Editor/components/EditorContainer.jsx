import { Box } from "@chakra-ui/layout"


const EditorContainer = ({children}) => {
    return (
			<Box
				w={{ base: "100%", lg: "85%", xl: "75%", "2xl": "70%"}}
				py={10}
				px={10}
				m={10}
				h={{ base: "100%", lg: "90%", xl: "85%"}}
				border={{ base: "none", lg: "2px solid gray" }}
				borderRadius={{ base: 0, lg: 20 }}
				overflow="auto"
				className="editor-container"
			>
				{children}
			</Box>
		);
}

export default EditorContainer

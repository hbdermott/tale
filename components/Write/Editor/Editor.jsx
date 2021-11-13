import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex } from "@chakra-ui/layout";
import BookDrawer from "../BookDrawer";
import EditorContainer from "./components/EditorContainer";
import Toolbar from "./components/Toolbar/Toolbar";
import PlateEditor from "./PlateEditor";

const Editor = () => {
    return (
		<Flex
				w="100%"
				h="100%"
				flexDir="column"
				justify={{ base: "space-between", lg: "space-around" }}
				align="center"
			>
				<EditorContainer>
                    <PlateEditor/>
                </EditorContainer>
                <Toolbar/>
			</Flex>
		);
}

export default Editor

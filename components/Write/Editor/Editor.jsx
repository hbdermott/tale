import { Flex} from "@chakra-ui/layout";
import EditorContainer from "./components/EditorContainer";
import Tiptap from "./TipTap";

const Editor = ({value}) => {
    return (
			<Flex
				w="100%"
				h={"100vh"}
				flexDir="column"
				justify={"space-between"}
				align="center"
			>
					<EditorContainer>
						<Tiptap/>
					</EditorContainer>
			</Flex>
		);
}

export default Editor

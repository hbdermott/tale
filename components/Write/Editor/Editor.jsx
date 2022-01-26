import { Flex} from "@chakra-ui/layout";
import EditorContainer from "./components/EditorContainer";
import Tiptap from "./TipTap";


const Editor = ({book}) => {
    return (
			<Flex
				w="100%"
				h="100%"
				flexDir="column"
				justify={"space-between"}
				align="center"
			>
					<EditorContainer>
						<Tiptap book={book}/>
					</EditorContainer>
			</Flex>
		);
}

export default Editor

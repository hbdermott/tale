import { Flex} from "@chakra-ui/layout";
import EditorContainer from "./components/EditorContainer";
import Toolbar from "./components/Toolbar/Toolbar";
import PlateEditor from "./PlateEditor";

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
						<PlateEditor value={value?.content} />
					</EditorContainer>

					<Toolbar bottom="0" position="sticky" value={value}/>
			</Flex>
		);
}

export default Editor

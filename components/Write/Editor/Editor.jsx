import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex } from "@chakra-ui/layout";
import { ArrowRight } from "@styled-icons/fluentui-system-filled";
import BookDrawer from "../BookDrawer";
import EditorContainer from "./components/EditorContainer";
import Toolbar from "./components/Toolbar/Toolbar";
import PlateEditor from "./PlateEditor";

const Editor = ({value}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
    return (
			<Flex
				w="100%"
				h="100%"
				flexDir="column"
				justify={{ base: "space-between", lg: "space-around" }}
				align="center"
			>
				<EditorContainer>
					<PlateEditor value={value ? value.content : null} />
				</EditorContainer>
				<Toolbar>
					<Button
						p={2}
						m={0}
						onMouseDown={async (e) => {
							e.preventDefault();
							// if (!editor) return;
							onOpen();
						}}
						rightIcon={<ArrowRight width="24px" />}
					>
						Next
					</Button>
					<BookDrawer
						title={value ? value.title : null}
						description={value ? value.description: null}
						genres={value ? value.genres : null}
						isOpen={isOpen}
						onClose={onClose}
					/>
				</Toolbar>
			</Flex>
		);
}

export default Editor

import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Center, Flex, VStack } from "@chakra-ui/layout";
import { ArrowRight } from "@styled-icons/fluentui-system-filled";
import BookDrawer from "../BookDrawer";
import EditorContainer from "./components/EditorContainer";
import Toolbar from "./components/Toolbar/Toolbar";
import PlateEditor from "./PlateEditor";
import { IconButton } from "@chakra-ui/react";

const Editor = ({value}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
    return (
			<VStack w="100%" h="100%">
				<Center w="100%" h="100%" pb="100px">
					<EditorContainer>
						<PlateEditor value={value ? value.content : null} />
					</EditorContainer>
				</Center>

				<Center
					w="100%"
					position="fixed"
					bottom="0"
				>
					<Toolbar>
						<IconButton
							m={0}
							backgroundColor="green.400"
							onMouseDown={async (e) => {
								e.preventDefault();
								onOpen();
							}}
							icon={<ArrowRight style={{ width: "24px" }} />}
						/>
						<BookDrawer
							title={value ? value.title : null}
							description={value ? value.description : null}
							genres={value ? value.genres : null}
							isOpen={isOpen}
							onClose={onClose}
						/>
					</Toolbar>
				</Center>
			</VStack>
		);
}

export default Editor

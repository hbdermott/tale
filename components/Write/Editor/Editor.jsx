import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Center, Flex, VStack } from "@chakra-ui/layout";
import { ArrowRight } from "@styled-icons/fluentui-system-filled";
import BookDrawer from "../BookDrawer";
import EditorContainer from "./components/EditorContainer";
import Toolbar from "./components/Toolbar/Toolbar";
import PlateEditor from "./PlateEditor";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { useStoreEditorValue } from "@udecode/plate";

const Editor = ({value}) => {
    return (
			<VStack w="100%" h="100%">
				<Center w="100%" h="100%" pb="100px">
					<EditorContainer>
						<PlateEditor value={value?.content} />
					</EditorContainer>
				</Center>

				<Center w="100%" position="sticky" bottom="0">
					<Toolbar value={value}/>
				</Center>
			</VStack>
		);
}

export default Editor

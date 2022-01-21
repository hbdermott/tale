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
import useWindowDimensions from "../../../lib/useWindowDimensions";

const Editor = ({value}) => {
	const dimensions = useWindowDimensions();
    return (
			<Flex
				w="100%"
				h={dimensions.height}
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


import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex, HStack } from "@chakra-ui/layout";
import { ArrowRight } from "@styled-icons/fluentui-system-filled";
import BookDrawer from "../../../BookDrawer";
import ToolbarHeaderMenu from "./ButtonGroups/Compact/ToolbarHeaderMenu";
import ToolbarImportCompact from "./ButtonGroups/Compact/ToolbarImportCompact";
import ToolbarLayoutCompact from "./ButtonGroups/Compact/ToolbarLayoutCompact";
import ToolbarMarkupCompact from "./ButtonGroups/Compact/ToolbarMarkupCompact";
// import ToolbarColorPicker from "./Toolbar/Buttons/ToolbarColorPicker";
import ToolbarContainer from "./ToolbarContainer";
const Toolbar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<ToolbarContainer>
			<Flex w="80%" justify="space-around" pr={10}>
				<ToolbarMarkupCompact />
				<ToolbarHeaderMenu />
				<ToolbarLayoutCompact />
				{/* <ToolbarIndents /> */}
				{/* <ToolbarMarks /> */}
				{/* <ToolbarColorPicker isDisabled={true} pluginKey={MARK_COLOR} />
			<ToolbarColorPicker isDisabled={true} pluginKey={MARK_BG_COLOR} /> */}
				<ToolbarImportCompact />
			</Flex>

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
			<BookDrawer isOpen={isOpen} onClose={onClose} />
		</ToolbarContainer>
	);
};

export default Toolbar;

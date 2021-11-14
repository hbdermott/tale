
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
const Toolbar = ({children}) => {
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
			{children}
		</ToolbarContainer>
	);
};

export default Toolbar;

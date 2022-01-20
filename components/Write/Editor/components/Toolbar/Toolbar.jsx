
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex, HStack } from "@chakra-ui/layout";
import { ArrowRight } from "@styled-icons/fluentui-system-filled";
import BookDrawer from "../../../BookDrawer";
import ToolbarHeader from "./Buttons/Groups/ToolbarHeader";
import ToolbarImport from "./Buttons/Groups/ToolbarImport";
import ToolbarLayout from "./Buttons/Groups/ToolbarLayout";
import ToolbarMarkup from "./Buttons/Groups/ToolbarMarkup";
// import ToolbarColorPicker from "./Toolbar/Buttons/ToolbarColorPicker";
import ToolbarContainer from "./ToolbarContainer";
const Toolbar = ({children}) => {
	return (
		<ToolbarContainer>
			<Flex w="80%" justify="space-around" pr={10}>
				<ToolbarMarkup />
				<ToolbarHeader />
				<ToolbarLayout />
				{/* <ToolbarIndents /> */}
				{/* <ToolbarMarks /> */}
				{/* <ToolbarColorPicker isDisabled={true} pluginKey={MARK_COLOR} />
			<ToolbarColorPicker isDisabled={true} pluginKey={MARK_BG_COLOR} /> */}
				<ToolbarImport />
			</Flex>
			{children}
		</ToolbarContainer>
	);
};

export default Toolbar;

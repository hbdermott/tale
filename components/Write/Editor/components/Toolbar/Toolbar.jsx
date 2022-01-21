
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex, HStack } from "@chakra-ui/layout";
import { ArrowRight } from "@styled-icons/fluentui-system-filled";
import BookDrawer from "../../../BookDrawer";
import ToolbarHeader from "./Buttons/Groups/ToolbarHeader";
import ToolbarImport from "./Buttons/Groups/ToolbarImport";
import ToolbarLayout from "./Buttons/Groups/ToolbarLayout";
import ToolbarMarkup from "./Buttons/Groups/ToolbarMarkup";
import { IconButton } from "@chakra-ui/react";
// import ToolbarColorPicker from "./Toolbar/Buttons/ToolbarColorPicker";
import ToolbarContainer from "./ToolbarContainer";
const Toolbar = ({value}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<ToolbarContainer>
			<Flex w="80%" justify="space-around" pr={10}>
				<ToolbarHeader />
				<ToolbarMarkup />
				<ToolbarLayout />
				{/* <ToolbarColorPicker isDisabled={true} pluginKey={MARK_COLOR} />
			<ToolbarColorPicker isDisabled={true} pluginKey={MARK_BG_COLOR} /> */}
				<ToolbarImport />
			</Flex>
			<IconButton
				variant="submit"
				onMouseDown={async (e) => {
					e.preventDefault();
					onOpen();
				}}
				icon={<ArrowRight style={{ width: "24px" }} />}
			/>
			<BookDrawer
				title={value?.title}
				description={value?.description}
				genres={value?.genres}
				id={value?.id}
				isOpen={isOpen}
				onClose={onClose}
			/>
		</ToolbarContainer>
	);
};

export default Toolbar;

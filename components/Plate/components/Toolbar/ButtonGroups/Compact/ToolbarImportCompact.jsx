import {
    VideoAdd,
    ImageAdd,
    Link,
    DocumentAdd,
} from "@styled-icons/fluentui-system-filled";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import ToolbarLink from "../../Buttons/ToolbarLink";
import ToolbarImage from "../../Buttons/ToolbarImage";
import ToolbarMedia from "../../Buttons/ToolbarMedia";

const ToolbarImportCompact = () => {
	return (
		<Menu offset={[-8, 15]}>
			<MenuButton
				as={Button}
				size="sm"
				p={2}
				iconSpacing={0}
				aria-label="Header Menu"
				rightIcon={<DocumentAdd style={{ width: "20px" }} />}
			></MenuButton>
			<MenuList flexDirection="row" minWidth="none" p={2} m={0}>
				<VStack width="fit-content">
					<ToolbarLink icon={<Link />} />
					<ToolbarImage icon={<ImageAdd />} />
					<ToolbarMedia icon={<VideoAdd />} />
				</VStack>
			</MenuList>
		</Menu>
	);
};

export default ToolbarImportCompact;

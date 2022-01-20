import {
    VideoAdd,
    ImageAdd,
    Link,
    DocumentAdd,
} from "@styled-icons/fluentui-system-filled";
import { Menu, MenuList } from "@chakra-ui/menu";
import { VStack } from "@chakra-ui/layout";
import ToolbarLink from "../../Buttons/ToolbarLink";
import ToolbarImage from "../../Buttons/ToolbarImage";
import ToolbarMedia from "../../Buttons/ToolbarMedia";
import MenuIconButton from "../../Buttons/MenuIconButton";

const ToolbarImport = () => {
	return (
		<Menu offset={[-8, 15]}>
			<MenuIconButton
				aria-label="Import Menu"
				icon={<DocumentAdd style={{ width: "24px" }} />}
			></MenuIconButton>
			<MenuList flexDirection="row" minWidth="none" p={2} m={0}>
				<VStack width="fit-content">
					<ToolbarLink icon={<Link style={{ width: "24px" }} />} />
					<ToolbarImage icon={<ImageAdd style={{ width: "24px" }} />} />
					<ToolbarMedia icon={<VideoAdd style={{ width: "24px" }} />} />
				</VStack>
			</MenuList>
		</Menu>
	);
};

export default ToolbarImport;

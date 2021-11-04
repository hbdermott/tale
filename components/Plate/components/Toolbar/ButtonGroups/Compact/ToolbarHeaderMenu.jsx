
import {
	TextHeader1,
	TextHeader2,
	TextHeader3,
	ChevronUp
} from "@styled-icons/fluentui-system-filled";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3 } from "@udecode/plate-heading";
import { Button } from "@chakra-ui/button";
import ToolbarElement from "../../Buttons/ToolbarElement";
import { HStack } from "@chakra-ui/layout";

const ToolbarHeaderMenu = () => {
	return (
		<Menu>
			<MenuButton
				as={Button}
				size="sm"
				p={2}
				iconSpacing={1}
				aria-label="Header Menu"
				rightIcon={<ChevronUp style={{ width: "16px" }} />}
			>
				Headers
			</MenuButton>
			<MenuList flexDirection="row" minWidth="none" p={2} m={0}>
				<HStack width="fit-content">
					<ToolbarElement typeName={ELEMENT_H1} icon={<TextHeader1 />} />
					<ToolbarElement typeName={ELEMENT_H2} icon={<TextHeader2 />} />
					<ToolbarElement typeName={ELEMENT_H3} icon={<TextHeader3 />} />
				</HStack>
			</MenuList>
		</Menu>
	);
};

export default ToolbarHeaderMenu;


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
import { HStack, VStack } from "@chakra-ui/layout";
import ToolbarBlockquote from "../Full/ToolbarBlockquote";

const ToolbarHeaderMenu = () => {
	return (
		<Menu offset={[-10, 15]}>
			<MenuButton
				as={Button}
				size="sm"
				p={2}
				iconSpacing={0}
				aria-label="Header Menu"
				rightIcon={<ChevronUp style={{ width: "16px" }} />}
			>
			</MenuButton>
			<MenuList flexDirection="row" minWidth="none" p={2} m={0}>
				<VStack width="fit-content">
					<ToolbarElement typeName={ELEMENT_H1} icon={<TextHeader1 />} />
					<ToolbarElement typeName={ELEMENT_H2} icon={<TextHeader2 />} />
					<ToolbarElement typeName={ELEMENT_H3} icon={<TextHeader3 />} />
					<ToolbarBlockquote/>
				</VStack>
			</MenuList>
		</Menu>
	);
};

export default ToolbarHeaderMenu;


import {
	TextHeader1,
	TextHeader2,
	TextHeader3,
	ChevronUp,
	TextQuote
} from "@styled-icons/fluentui-system-filled";
import { Menu, MenuList } from "@chakra-ui/menu";
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3 } from "@udecode/plate-heading";
import ToolbarElement from "../../Buttons/Base/ToolbarElement"
import {  VStack } from "@chakra-ui/layout";
import MenuIconButton from "../../Buttons/MenuIconButton";
import { ELEMENT_BLOCKQUOTE } from "@udecode/plate";

const ToolbarHeader = () => {
	return (
		<Menu offset={[-10, 15]}>
			<MenuIconButton
				aria-label="Header Menu"
				icon={<ChevronUp style={{ width: "24px" }} />}
			></MenuIconButton>
			<MenuList minWidth="none" p={2} m={0}>
				<VStack width="fit-content">
					<ToolbarElement
						typeName={ELEMENT_H1}
						icon={<TextHeader1 style={{ width: "24px" }} />}
					/>
					<ToolbarElement
						typeName={ELEMENT_H2}
						icon={<TextHeader2 style={{ width: "24px" }} />}
					/>
					<ToolbarElement
						typeName={ELEMENT_H3}
						icon={<TextHeader3 style={{ width: "24px" }} />}
					/>
					<ToolbarElement
						typeName={ELEMENT_BLOCKQUOTE}
						icon={<TextQuote style={{ width: "24px" }} />}
					/>
				</VStack>
			</MenuList>
		</Menu>
	);
};

export default ToolbarHeader;

import {
	ChevronUp,
	VideoAdd,
	ImageAdd,
	Link,
    TextIndentDecrease,
    TextIndentIncrease,
} from "@styled-icons/fluentui-system-filled";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import ToolbarLink from "../../Buttons/ToolbarLink";
import ToolbarImage from "../../Buttons/ToolbarImage";
import ToolbarMedia from "../../Buttons/ToolbarMedia";
import ToolbarButton from "../../Buttons/ToolbarButton";

const ToolbarImportCompact = () => {
	return (
		<Menu offset={[-8, 8]}>
			<MenuButton
				as={Button}
				size="sm"
				p={2}
				iconSpacing={0}
				aria-label="Header Menu"
				rightIcon={<ChevronUp style={{ width: "16px" }} />}
			></MenuButton>
			<MenuList flexDirection="row" minWidth="none" p={2} m={0}>
				<VStack width="fit-content">
					<ToolbarButton
						onMouseDown={editor && getPreventDefaultHandler(outdent, editor)}
						icon={<TextIndentDecrease />}
					/>
					<ToolbarButton
						onMouseDown={editor && getPreventDefaultHandler(indent, editor)}
						icon={<TextIndentIncrease />}
					/>
				</VStack>
			</MenuList>
		</Menu>
	);
};

export default ToolbarImportCompact;

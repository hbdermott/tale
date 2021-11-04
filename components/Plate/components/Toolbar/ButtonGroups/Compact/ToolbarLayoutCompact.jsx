import {
	ChevronUp,
    TextAlignCenter,
    TextAlignDistributed,
    TextAlignLeft,
    TextAlignRight,
    TextIndentDecrease,
    TextIndentIncrease,
} from "@styled-icons/fluentui-system-filled";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import ToolbarButton from "../../Buttons/ToolbarButton";
import { indent, outdent } from "@udecode/plate-indent";
import ToolbarAlign from "../../Buttons/ToolbarAlign";
import { getPreventDefaultHandler } from "@udecode/plate-common";
import { useStoreEditorRef } from "@udecode/plate-core";

const ToolbarLayoutCompact = () => {
	const editor = useStoreEditorRef('main-editor');
	return (
		<Menu offset={[-8, 8]}>
			<MenuButton
				as={Button}
				size="sm"
				p={2}
				iconSpacing={0}
				aria-label="Header Menu"
				rightIcon={<TextAlignDistributed style={{ width: "20px" }} />}
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
					<ToolbarAlign align="left" icon={<TextAlignLeft />} />
					<ToolbarAlign align="center" icon={<TextAlignCenter />} />
					<ToolbarAlign align="right" icon={<TextAlignRight />} />
				</VStack>
			</MenuList>
		</Menu>
	);
};

export default ToolbarLayoutCompact;

import {
    TextAlignCenter,
    TextAlignDistributed,
    TextAlignLeft,
    TextAlignRight,
    TextIndentDecrease,
    TextIndentIncrease,
} from "@styled-icons/fluentui-system-filled";
import { Menu, MenuList } from "@chakra-ui/menu";
import { HStack, VStack } from "@chakra-ui/layout";
import ToolbarButton from "../../Buttons/Base/ToolbarButton";
import { indent, outdent } from "@udecode/plate-indent";
import ToolbarAlign from "../../Buttons/ToolbarAlign";
import { getPreventDefaultHandler, usePlateEditorRef } from "@udecode/plate-core";
import MenuIconButton from "../../Buttons/MenuIconButton";

const ToolbarLayout = () => {
	const editor = usePlateEditorRef('main-editor');
	return (
		<Menu offset={[-45, 15]}>
			<MenuIconButton
				aria-label="Text Layout Menu"
				icon={<TextAlignDistributed style={{ width: "24px" }} />}
			></MenuIconButton>
			<MenuList flexDirection="row" minWidth="none" p={2} m={0}>
				<VStack width="fit-content">
					<HStack>
						<ToolbarAlign
							align="left"
							icon={<TextAlignLeft style={{ width: "24px" }} />}
						/>
						<ToolbarAlign
							align="center"
							icon={<TextAlignCenter style={{ width: "24px" }} />}
						/>
						<ToolbarAlign
							align="right"
							icon={<TextAlignRight style={{ width: "24px" }} />}
						/>
					</HStack>
					<HStack>
						<ToolbarButton
							onMouseDown={editor && getPreventDefaultHandler(indent, editor)}
							icon={<TextIndentIncrease style={{ width: "24px" }} />}
						/>
						<ToolbarButton
							onMouseDown={editor && getPreventDefaultHandler(outdent, editor)}
							icon={<TextIndentDecrease style={{ width: "24px" }} />}
						/>
					</HStack>
				</VStack>
			</MenuList>
		</Menu>
	);
};

export default ToolbarLayout;

import {
    Code,
    Highlight,
    TextBold,
    TextEditStyle,
    TextItalic,
    TextStrikethrough,
    TextUnderline,
} from "@styled-icons/fluentui-system-filled";
import { Menu, MenuList } from "@chakra-ui/menu";
import { HStack, VStack } from "@chakra-ui/layout";
import ToolbarMark from "../Base/ToolbarMark";
import { MARK_BOLD, MARK_CODE, MARK_ITALIC, MARK_STRIKETHROUGH, MARK_UNDERLINE } from "@udecode/plate-basic-marks";
import MenuIconButton from "../MenuIconButton";
import { MARK_HIGHLIGHT } from "@udecode/plate";

const ToolbarMarkup = () => {
	return (
		<Menu offset={[-45, 15]}>
			<MenuIconButton
				aria-label="Text Markup Menu"
				icon={<TextEditStyle style={{ width: "24px" }} />}
			></MenuIconButton>
			<MenuList flexDirection="row" minWidth="none" p={2} m={0}>
				<VStack width="fit-content">
					<HStack>
						<ToolbarMark
							typeName={MARK_BOLD}
							icon={<TextBold style={{ width: "24px" }} />}
						/>
						<ToolbarMark
							typeName={MARK_ITALIC}
							icon={<TextItalic style={{ width: "24px" }} />}
						/>
						<ToolbarMark
							typeName={MARK_UNDERLINE}
							icon={<TextUnderline style={{ width: "24px" }} />}
						/>
					</HStack>
					<HStack>
						<ToolbarMark
							typeName={MARK_STRIKETHROUGH}
							icon={<TextStrikethrough style={{ width: "24px" }} />}
						/>
						<ToolbarMark
							typeName={MARK_CODE}
							icon={<Code style={{ width: "24px" }} />}
						/>
						<ToolbarMark
							typeName={MARK_HIGHLIGHT}
							icon={<Highlight style={{ width: "24px" }} />}
						/>
					</HStack>
				</VStack>
			</MenuList>
		</Menu>
	);
};

export default ToolbarMarkup;

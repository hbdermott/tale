import {
    Code,
	TextAlignDistributed,
    TextBold,
    TextItalic,
    TextStrikethrough,
    TextUnderline,
} from "@styled-icons/fluentui-system-filled";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import ToolbarMark from "../../Buttons/ToolbarMark";
import { MARK_BOLD, MARK_CODE, MARK_ITALIC, MARK_STRIKETHROUGH, MARK_UNDERLINE } from "@udecode/plate-basic-marks";

const ToolbarMarkupCompact = () => {
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
					<ToolbarMark typeName={MARK_BOLD} icon={<TextBold />} />
					<ToolbarMark typeName={MARK_ITALIC} icon={<TextItalic />} />
					<ToolbarMark typeName={MARK_UNDERLINE} icon={<TextUnderline />} />
					<ToolbarMark
						typeName={MARK_STRIKETHROUGH}
						icon={<TextStrikethrough />}
					/>
					<ToolbarMark typeName={MARK_CODE} icon={<Code />} />
				</VStack>
			</MenuList>
		</Menu>
	);
};

export default ToolbarMarkupCompact;

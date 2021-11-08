import {
    Code,
    TextBold,
    TextEditStyle,
    TextItalic,
    TextStrikethrough,
    TextUnderline,
} from "@styled-icons/fluentui-system-filled";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { Button, IconButton } from "@chakra-ui/button";
import { HStack, VStack } from "@chakra-ui/layout";
import ToolbarMark from "../../Buttons/ToolbarMark";
import { MARK_BOLD, MARK_CODE, MARK_ITALIC, MARK_STRIKETHROUGH, MARK_UNDERLINE } from "@udecode/plate-basic-marks";
import ToolbarHighlight from "../Full/ToolbarHighlight";

const ToolbarMarkupCompact = () => {
	return (
		<Menu offset={[-45, 15]}>
			<MenuButton
				as={IconButton}
				size="lg"
				p={2}
				aria-label="Header Menu"
				icon={<TextEditStyle style={{ width: "20px" }} />}
			></MenuButton>
			<MenuList flexDirection="row" minWidth="none" p={2} m={0}>
				<VStack width="fit-content">
					<HStack>
						<ToolbarMark typeName={MARK_BOLD} icon={<TextBold />} />
						<ToolbarMark typeName={MARK_ITALIC} icon={<TextItalic />} />
						<ToolbarMark typeName={MARK_UNDERLINE} icon={<TextUnderline />} />
					</HStack>
					<HStack>
						<ToolbarMark
							typeName={MARK_STRIKETHROUGH}
							icon={<TextStrikethrough />}
						/>
						<ToolbarMark typeName={MARK_CODE} icon={<Code />} />
						<ToolbarHighlight/>
					</HStack>
				</VStack>
			</MenuList>
		</Menu>
	);
};

export default ToolbarMarkupCompact;

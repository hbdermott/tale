import { HStack } from "@chakra-ui/layout";
import { TextBold, TextItalic, TextUnderline, TextStrikethrough } from "@styled-icons/fluentui-system-filled";
import { MARK_BOLD, MARK_ITALIC, MARK_UNDERLINE } from "@udecode/plate-basic-marks";
import { useStoreEditorRef } from "@udecode/plate-core";
import { BalloonToolbar } from "@udecode/plate-toolbar";

import ToolbarMark from "../../Buttons/ToolbarMark";

const ToolbarBalloons = ({editorID = 'main-editor'}) => {
	const editor = useStoreEditorRef(editorID);
	const arrow = false;
	const theme = "dark";
	const tooltip = {
		arrow: true,
		delay: 0,
		duration: [200, 0],
		hideOnClick: false,
		offset: [0, 17],
		placement: "bottom",
	};

	return (
		<BalloonToolbar
			popperOptions={{
				placement: "bottom",
			}}
			theme={theme}
			arrow={arrow}
			classNames={{root: "balloonToolbar"}}
		>
			<HStack spacing={2}>
				<ToolbarMark
					typeName={MARK_BOLD}
					icon={<TextBold />}
				/>
				<ToolbarMark
					typeName={MARK_ITALIC}
					icon={<TextItalic />}
				/>
				<ToolbarMark
					typeName={MARK_UNDERLINE}
					icon={<TextUnderline />}
				/>
			</HStack>
		</BalloonToolbar>
	);
};

export default ToolbarBalloons;
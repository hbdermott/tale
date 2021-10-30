import { HStack, Stack } from "@chakra-ui/layout";
import { TextBold, TextItalic, TextUnderline, TextStrikethrough } from "@styled-icons/fluentui-system-filled";

import {
	MARK_BOLD,
	MARK_ITALIC,
	MARK_UNDERLINE,
	BalloonToolbar,
	useEventEditorId,
	useStoreEditorRef,
	getPlatePluginType,
} from "@udecode/plate";
import MarkButton from "../ToolbarButtons/MarkButton";

const ToolbarBalloons = () => {
	const editor = useStoreEditorRef(useEventEditorId('focus'));
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
				<MarkButton
					type={getPlatePluginType(editor, MARK_BOLD)}
					icon={<TextBold />}
					tooltip={{ content: "Bold: ⌘B", ...tooltip }}
				/>
				<MarkButton
					type={getPlatePluginType(editor, MARK_ITALIC)}
					icon={<TextItalic />}
					tooltip={{ content: "Italic: ⌘I", ...tooltip }}
				/>
				<MarkButton
					type={getPlatePluginType(editor, MARK_UNDERLINE)}
					icon={<TextUnderline />}
					tooltip={{ content: "Underline: ⌘U", ...tooltip }}
				/>
			</HStack>
		</BalloonToolbar>
	);
};

export default ToolbarBalloons;
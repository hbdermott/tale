import { Bold, Italic, Underline } from "@styled-icons/feather";
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
	const editor = useStoreEditorRef(useEventEditorId("focus"));
	const arrow = false;
	const theme = "dark";
	const tooltip = {
		arrow: true,
		delay: 0,
		duration: [200, 0],
		hideOnClick: false,
		offset: [0, 17],
		placement: "top",
	};

	return (
		<BalloonToolbar
			popperOptions={{
				placement: "bottom",
			}}
			theme={theme}
			arrow={arrow}
		>
			<MarkButton
				type={getPlatePluginType(editor, MARK_BOLD)}
				icon={<Bold />}
				tooltip={{ content: "Bold (⌘B)", ...tooltip }}
			/>
			<MarkButton
				type={getPlatePluginType(editor, MARK_ITALIC)}
				icon={<Italic />}
				tooltip={{ content: "Italic (⌘I)", ...tooltip }}
			/>
			<MarkButton
				type={getPlatePluginType(editor, MARK_UNDERLINE)}
				icon={<Underline />}
				tooltip={{ content: "Underline (⌘U)", ...tooltip }}
			/>
		</BalloonToolbar>
	);
};

export default ToolbarBalloons;
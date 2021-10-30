import { TextAlignLeft, TextAlignCenter, TextAlignRight, TextAlignJustify } from "@styled-icons/fluentui-system-filled";
import AlignButton from "../ToolbarButtons/AlignButton";
const ToolbarAligns = () => {
	return (
		<>
			<AlignButton align="left" icon={<TextAlignLeft/>} />
			<AlignButton align="center" icon={<TextAlignCenter />} />
			<AlignButton align="right" icon={<TextAlignRight />} />
			<AlignButton align="justify" icon={<TextAlignJustify />} />
		</>
	);
};

export default ToolbarAligns;
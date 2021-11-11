import { TextAlignLeft, TextAlignCenter, TextAlignRight, TextAlignJustify } from "@styled-icons/fluentui-system-filled";
import ToolbarAlign from "../../Buttons/ToolbarAlign";
const ToolbarAligns = () => {
	return (
		<>
			<ToolbarAlign align="left" icon={<TextAlignLeft/>} />
			<ToolbarAlign align="center" icon={<TextAlignCenter />} />
			<ToolbarAlign align="right" icon={<TextAlignRight />} />
			<ToolbarAlign align="justify" icon={<TextAlignJustify />} />
		</>
	);
};

export default ToolbarAligns;
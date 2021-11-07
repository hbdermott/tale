import { TextStrikethrough, Code, TextBold, TextItalic, TextUnderline } from "@styled-icons/fluentui-system-filled";
import { MARK_BOLD, MARK_CODE, MARK_ITALIC, MARK_STRIKETHROUGH, MARK_UNDERLINE } from "@udecode/plate-basic-marks";
import ToolbarMark from "../../Buttons/ToolbarMark";

const ToolbarMarks = () => {
	return (
		<>
			<ToolbarMark typeName={MARK_BOLD} icon={<TextBold />} />
			<ToolbarMark  typeName={MARK_ITALIC} icon={<TextItalic />} />
			<ToolbarMark  typeName={MARK_UNDERLINE} icon={<TextUnderline />} />
			<ToolbarMark
				
				typeName={MARK_STRIKETHROUGH}
				icon={<TextStrikethrough />}
			/>
			<ToolbarMark  typeName={MARK_CODE} icon={<Code />} />
		</>
	);
};

export default ToolbarMarks;
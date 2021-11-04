import { TextStrikethrough, TextSubscript, TextSuperscript, Code, TextBold, TextItalic, TextUnderline } from "@styled-icons/fluentui-system-filled";
import {
	MARK_BOLD,
	MARK_CODE,
	MARK_ITALIC,
	MARK_STRIKETHROUGH,
	MARK_SUBSCRIPT,
	MARK_SUPERSCRIPT,
	MARK_UNDERLINE,
} from "@udecode/plate";
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
			<ToolbarMark
				
				typeName={MARK_SUPERSCRIPT}
				clear={MARK_SUBSCRIPT}
				icon={<TextSuperscript />}
			/>
			<ToolbarMark
				
				typeName={MARK_SUBSCRIPT}
				clear={MARK_SUPERSCRIPT}
				icon={<TextSubscript />}
			/>
			<ToolbarMark  typeName={MARK_CODE} icon={<Code />} />
		</>
	);
};

export default ToolbarMarks;

import { TextQuote } from "@styled-icons/fluentui-system-filled";
import { ELEMENT_BLOCKQUOTE } from "@udecode/plate";
import ToolbarElement from "../../Buttons/ToolbarElement";

const ToolbarBlockquote = () => {
	return (
			<ToolbarElement typeName={ELEMENT_BLOCKQUOTE} icon={<TextQuote />} />
	);
};

export default ToolbarBlockquote;

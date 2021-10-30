import { TextStrikethrough, TextSubscript, TextSuperscript, Code, TextBold, TextItalic, TextUnderline } from "@styled-icons/fluentui-system-filled";
import {
	MARK_BOLD,
	MARK_CODE,
	MARK_ITALIC,
	MARK_STRIKETHROUGH,
	MARK_SUBSCRIPT,
	MARK_SUPERSCRIPT,
	MARK_UNDERLINE,
	useEventEditorId,
	useStoreEditorRef,
} from "@udecode/plate";
import MarkButton from "../ToolbarButtons/MarkButton";

const ToolbarMarks = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));
	return (
		<>
			<MarkButton editor={editor} type={MARK_BOLD} icon={<TextBold />} />
			<MarkButton editor={editor} type={MARK_ITALIC} icon={<TextItalic />} />
			<MarkButton editor={editor} type={MARK_UNDERLINE} icon={<TextUnderline />} />
			<MarkButton
				editor={editor}
				type={MARK_STRIKETHROUGH}
				icon={<TextStrikethrough />}
			/>
			<MarkButton
				editor={editor}
				type={MARK_SUPERSCRIPT}
				clear={MARK_SUBSCRIPT}
				icon={<TextSuperscript />}
			/>
			<MarkButton
				editor={editor}
				type={MARK_SUBSCRIPT}
				clear={MARK_SUPERSCRIPT}
				icon={<TextSubscript />}
			/>
			<MarkButton editor={editor} type={MARK_CODE} icon={<Code />} />
		</>
	);
};

export default ToolbarMarks;
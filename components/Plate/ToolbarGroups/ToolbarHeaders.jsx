import { H1, H2, H3, H4, H5, H6 } from "@styled-icons/remix-editor";
import {
	ELEMENT_H1,
	ELEMENT_H2,
	ELEMENT_H3,
	ELEMENT_H4,
	ELEMENT_H5,
	ELEMENT_H6,
	useEventEditorId,
	useStoreEditorRef,
} from "@udecode/plate";
import ElementButton from "../ToolbarButtons/ElementButton";

const ToolbarHeaders = () => {
	const editor = useStoreEditorRef(useEventEditorId("focus"));
	return (
		<>
			<ElementButton editor={editor} type={ELEMENT_H1} icon={<H1 />} />
			<ElementButton editor={editor} type={ELEMENT_H2} icon={<H2 />} />
			<ElementButton editor={editor} type={ELEMENT_H3} icon={<H3 />} />
			<ElementButton editor={editor} type={ELEMENT_H4} icon={<H4 />} />
			{/* <ElementButton editor={editor} type={ELEMENT_H5} icon={<H5/>} />
			<ElementButton editor={editor} type={ELEMENT_H6} icon={<H6 />} /> */}
			{/* <ElementButton
				editor={editor}
				type={ELEMENT_BLOCKQUOTE}
				icon={<FormatQuote />}
			/> */}
			{/* <ToolbarCodeBlock
				editor={editor}
				type={ELEMENT_CODE_BLOCK}
				icon={<CodeBlock />}
			/> */}
		</>
	);
};

export default ToolbarHeaders;

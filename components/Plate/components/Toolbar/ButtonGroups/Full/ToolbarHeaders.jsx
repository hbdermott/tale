import {TextHeader1, TextHeader2, TextHeader3} from "@styled-icons/fluentui-system-filled"
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3 } from "@udecode/plate-heading";
import ToolbarElement from "../../Buttons/ToolbarElement";

const ToolbarHeaders = () => {
	return (
		<>
			<ToolbarElement typeName={ELEMENT_H1} icon={<TextHeader1 />} />
			<ToolbarElement typeName={ELEMENT_H2} icon={<TextHeader2 />} />
			<ToolbarElement typeName={ELEMENT_H3} icon={<TextHeader3 />} />
		</>
	);
};

export default ToolbarHeaders;

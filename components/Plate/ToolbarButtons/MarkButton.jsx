import { Button } from "@chakra-ui/button";
import { getPlatePluginType } from "@udecode/plate-core";
import { ToolbarMark } from "@udecode/plate-toolbar";
import { defaultButtonProps } from "./theme/defaultButtonProps";


const MarkButton = ({editor, clear, type, classes, button, ...rest}) => {
	const buttonStyle = Object.assign({}, button, defaultButtonProps);
	return (
		<Button {...buttonStyle}>
			<ToolbarMark
				clear={getPlatePluginType(editor, clear)}
				type={getPlatePluginType(editor, type)}
				classNames={
					classes
						? classes
						: { root: "baseToolbarButton", active: "activeToolbarButton" }
				}
				{...rest}
			/>
		</Button>
	);
}

export default MarkButton;
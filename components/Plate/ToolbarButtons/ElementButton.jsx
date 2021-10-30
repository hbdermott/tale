import { Button } from "@chakra-ui/button";
import { ToolbarElement, getPlatePluginType } from "@udecode/plate";
import { defaultButtonProps } from "./theme/defaultButtonProps";

const ElementButton = ({ editor, type, classes, button, ...rest }) => {
	const buttonStyle = Object.assign({}, button, defaultButtonProps);

	return (
		<Button {...buttonStyle}>
			<ToolbarElement
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
};

export default ElementButton;

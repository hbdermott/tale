import { Button } from "@chakra-ui/button";
import { ToolbarButton } from "@udecode/plate";
import { defaultButtonProps } from "./theme/defaultButtonProps";

const ToolButton = ({ classes, button, ...rest }) => {
	const buttonStyle = Object.assign({}, button, defaultButtonProps);
	return (
		<Button {...buttonStyle}>
			<ToolbarButton
				{...rest}
				classNames={
					classes
						? classes
						: { root: "baseToolbarButton", active: "activeToolbarButton" }
				}
			/>
		</Button>
	);
};

export default ToolButton;

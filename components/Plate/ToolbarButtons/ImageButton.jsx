
import { Button } from "@chakra-ui/button";
import { ToolbarImage } from "@udecode/plate";
import { defaultButtonProps } from "./theme/defaultButtonProps";
const ImageButton = ({
	classes,
	button,
	...rest
}) => {
	const buttonStyle = Object.assign({}, button, defaultButtonProps);
	return (
		<Button {...buttonStyle}>
			<ToolbarImage
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
export default ImageButton;



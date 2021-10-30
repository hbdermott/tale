import { Button } from "@chakra-ui/button";
import { ToolbarLink } from "@udecode/plate-link-ui";
import { defaultButtonProps } from "./theme/defaultButtonProps";
const LinkButton = ({
	classes,
	button,
	...rest
}) => {
	const buttonStyle = Object.assign({}, button, defaultButtonProps);
	return (
		<Button {...buttonStyle}>
			<ToolbarLink
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
export default LinkButton



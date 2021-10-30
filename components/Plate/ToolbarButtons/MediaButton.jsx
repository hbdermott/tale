
import { Button } from "@chakra-ui/button";
import { ToolbarMediaEmbed } from "@udecode/plate-media-embed-ui";
import { defaultButtonProps } from "./theme/defaultButtonProps";
const MediaButton = ({ classes, button, ...rest }) => {
	const buttonStyle = Object.assign({}, button, defaultButtonProps);
	return (
		<Button {...buttonStyle}>
			<ToolbarMediaEmbed
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
export default MediaButton;



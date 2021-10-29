
import { Button } from "@chakra-ui/button";
import { ToolbarMediaEmbed } from "@udecode/plate-media-embed-ui";
const MediaButton = ({ classes, ...rest }) => {
	return (
		<Button p={0} m={0} colorScheme="teal" variant="outline">
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



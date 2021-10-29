
import { Button } from "@chakra-ui/button";
import { ToolbarImage } from "@udecode/plate";
const ImageButton = ({ classes, ...rest }) => {
	return (
		<Button p={0} m={0} colorScheme="teal" variant="outline">
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



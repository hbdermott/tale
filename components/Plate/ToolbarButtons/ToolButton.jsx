import { Button } from "@chakra-ui/button";
import { ToolbarButton } from "@udecode/plate";

const ToolButton = ({ classes, ...rest }) => {
	return (
		<Button p={0} m={0} colorScheme="teal" variant="outline">
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

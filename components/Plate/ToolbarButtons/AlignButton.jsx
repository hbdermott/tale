import { Button } from "@chakra-ui/button";
import { ToolbarAlign } from "@udecode/plate";

const AlignButton = ({classes, ...rest}) => {
	return (
		<Button p={0} m={0} colorScheme="teal" variant="outline">
			<ToolbarAlign
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

export default AlignButton;

import { Button } from "@chakra-ui/button";
import { ToolbarLink } from "@udecode/plate-link-ui";
const LinkButton = ({classes, ...rest}) => {
        return (
		<Button p={0} m={0} colorScheme="teal" variant="outline">
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
}
export default LinkButton



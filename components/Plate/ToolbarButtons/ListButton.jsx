import { Button } from "@chakra-ui/button";
import { getPlatePluginType } from "@udecode/plate-core";
import { ToolbarList } from "@udecode/plate-list-ui";
import { defaultButtonProps } from "./theme/defaultButtonProps";

const ListButton = ({ editor, clear, type, classes, button, ...rest }) => {
	const buttonStyle = Object.assign({}, button, defaultButtonProps);
	return (
		<Button {...buttonStyle}>
			<ToolbarList
				clear={getPlatePluginType(editor, clear)}
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

export default ListButton;

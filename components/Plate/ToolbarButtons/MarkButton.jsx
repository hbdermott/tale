import { Button } from "@chakra-ui/button";
import { getPlatePluginType } from "@udecode/plate-core";
import { ToolbarMark } from "@udecode/plate-toolbar";


const MarkButton = ({editor, clear, type, classes, ...rest}) => {
    return (
            <Button p={0} m={0} colorScheme="teal" variant="outline">
                <ToolbarMark
                    clear={getPlatePluginType(editor, clear)}
                    type={getPlatePluginType(editor, type)}
                    classNames={classes ? classes : {root: "baseToolbarButton", active: "activeToolbarButton"}}
                    {...rest}
                />
            </Button>
		);
}

export default MarkButton;
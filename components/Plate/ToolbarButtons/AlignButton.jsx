import { Button } from "@chakra-ui/button";
import { ToolbarAlign } from "@udecode/plate";
import { defaultButtonProps } from "./theme/defaultButtonProps";

const AlignButton = ({button, ...rest}) => {
	const buttonStyle = Object.assign({}, button, defaultButtonProps);
	return (
		<Button {...buttonStyle}>
			<AlignDefault {...rest}/>
		</Button>
	);
};

const AlignDefault = ({classes, ...rest}) => {
	return (
		<ToolbarAlign
			{...rest}
			classNames={
				classes
					? classes
					: { root: "baseToolbarButton", active: "activeToolbarButton" }
			}
		/>
	);
}

export {AlignDefault, AlignButton};

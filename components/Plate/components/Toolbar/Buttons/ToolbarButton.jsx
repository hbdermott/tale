import {Button, IconButton } from "@chakra-ui/button";

const defaultStyles = {
	base: {
        p: 1,
		borderRadius: "6px",
		size: "lg"
	},
	active: {
        p: 0,
		borderRadius: "6px",
		border: "2px solid #68D39166",
		boxSizing: "border-box",
		size: "lg"
	},
};

const ToolbarButton = ({children, styles, active, onMouseDown, ...rest}) => {
	const baseStyle = Object.assign({}, defaultStyles.base, styles?.base);
    const activeStyle = Object.assign({}, defaultStyles.active, styles?.active);
    const style = active ? activeStyle : baseStyle;
	return (
		<>
			{children ? (
				<Button
                    onMouseDown={onMouseDown}
                    {...style}
                    {...rest}
				>
					{children}
				</Button>
			) : (
				<IconButton
					onMouseDown={onMouseDown}
					{...style}
					{...rest}
				/>
			)}
		</>
	);
};

export default ToolbarButton;
import {Button, IconButton } from "@chakra-ui/button";

const defaultStyles = {
	base: {
        p: 1,
	},
	active: {
        p: 0,
		border: "2px solid #68D39166",
		boxSizing: "border-box",
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
					fontSize="20px"
					{...rest}
				/>
			)}
		</>
	);
};

export default ToolbarButton;
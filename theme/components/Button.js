const sizes = {
	lg: {
		fontSize: "md",
		borderRadius: "lg",
		p: "3",
	}
};

const variants = {
	solid: (props) => ({
		bg: props.colorMode === "dark" ? "gray.900" : "gray.100",
		// boxShadow: props.colorMode === "dark" ? "2xl" : "inner",
		_hover: {
			bg: props.colorMode === "dark" ? "gray.700" : "gray.300",
		},
		_focus: {
			bg: props.colorMode === "dark" ? "gray.700" : "gray.300",
		},
		_active: {
			bg: props.colorMode === "dark" ? "gray.700" : "gray.300",
		},
	}),
	outline: (props) => ({
		bg: "transparent",
		border: "2px",
		borderColor: props.colorMode === "dark" ? "gray.700" : "gray.500",
	}),
	ghost: (props) => ({
		backdropFilter: "blur(10px)",
		bg: props.colorMode === "dark" ? "gray.900" : "gray.100",
		opacity: 0.6,
		_hover: {
			bg: props.colorMode === "dark" ? "gray.700" : "gray.300",
		},
		_active: {
			bg: props.colorMode === "dark" ? "gray.700" : "gray.300",
		},
		_focus: {
			bg: props.colorMode === "dark" ? "gray.700" : "gray.300",
		},
	}),
	submit: (props) => ({
		bg: props.colorMode === "dark" ? "green.600" : "green.400",
		p: "6",
		_hover: {
			bg: props.colorMode === "dark" ? "green.400" : "green.500",
		},
	}),
	edit: (props) => ({
		bg: props.colorMode === "dark" ? "blue.600" : "blue.400",
		p: "6",
		fontSize: "lg",
		_hover: {
			bg: props.colorMode === "dark" ? "blue.400" : "blue.500",
		},
	}),
};

const defaultProps = {
	size: "lg",
	variant: "solid",
};

const baseStyle = (props) => ({
	boxShadow: props.colorMode === "dark" ? "2xl" : "inner"
});

const Card = { defaultProps, sizes, variants, baseStyle };
export default Card;

const sizes = {
	// lg: {
	// 	fontSize: "md",
	// 	borderRadius: "lg",
	// 	// p: "3",
	// }
};

const variants = {
	solid: (props) => ({
		boxShadow: props.colorMode === "dark" ? "2xl" : "inner",
		bg: props.colorMode === "dark" ? "gray.900" : "gray.100",
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
		bg: "none",
		border: "4px",
		borderColor: props.colorMode === "dark" ? "gray.700" : "gray.400",
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
	inset: (props) => ({
		bg: props.colorMode === "dark" ? "#2D374855" : "#EDF2F7AA",
		rounded: "xl",
		// border: "1px",
		// borderColor: props.colorMode === "dark" ? "gray.800" : "gray.100",
		boxShadow: "inner",
		fontWeight: "bold",
	}),
	overlay: (props) => ({
		backdropFilter: "blur(10px)",
		opacity: 0.6,
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
	boxShadow: props.colorMode === "dark" ? "2xl" : "inner",
	bg: props.colorMode === "dark" ? "gray.900" : "gray.100",
	_hover: {
		bg: props.colorMode === "dark" ? "gray.700" : "gray.300",
	},
	_focus: {
		bg: props.colorMode === "dark" ? "gray.700" : "gray.300",
	},
	_active: {
		bg: props.colorMode === "dark" ? "gray.700" : "gray.300",
	},
});

const Card = { defaultProps, sizes, variants, baseStyle };
export default Card;

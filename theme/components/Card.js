

const sizes = {
	lg: {
		fontSize: "md",
		borderRadius: "xl",
		p: "3.5",
		m: "lg",
		width: "full",
		height: "2xs"
	},
};

const variants = {
	solid: (props) => ({
		bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
		boxShadow: props.colorMode === "dark" ? "2xl" : "xl",
		border: "4px",
		borderColor: props.colorMode === "dark" ? "gray.800" : "gray.100",
	}),
};

const defaultProps = {
	size: "lg",
	variant: "solid",
};

const Card = { defaultProps, sizes, variants };
export default Card;

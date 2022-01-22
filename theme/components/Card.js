
const parts = ['base', 'body', 'blur']
const baseStyle = (props) => ({
	base: {
		maxW: "400px",
		rounded: "xl",
		overflow: "hidden",
		m: "lg",
		w: "full",
		boxShadow: props.colorMode === "dark" ? "2xl" : "xl",
		border: "4px",
		borderColor: props.colorMode === "dark" ? "gray.800" : "gray.100",
	},
	body: {
		p: "6",
		fontSize: "md",
		h: "2xs",
		bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
	},
	blur: {
		h: "full",
		w: "full",
		bg: props.colorMode === "dark" ? "gray.900" : "gray.200",
		opacity: 0.7,
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: "docked",
	},
});
const sizes = {}
const variants = {
}

const defaultProps = {}

const Card = { parts, baseStyle, sizes, variants, defaultProps  };
export default Card;

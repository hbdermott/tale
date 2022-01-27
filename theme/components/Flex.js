
const baseStyle = (props) => ({
	
});
const sizes = {};
const variants = (props) => ({
	toolbar: {
		rounded: "lg",
		w: "full",
		h: "fit-content",
		p: "3",
		bg: props.colorMode === "dark" ? "gray.900" : "gray.200",
		// boxShadow: props.colorMode === "dark" ? "2xl" : "xl",
	},
});

const defaultProps = {};

const Flex = { baseStyle, sizes, variants, defaultProps };
export default Flex;

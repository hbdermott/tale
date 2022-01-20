
const variants = {
	toolbar: (props) => ({
		list: {
			bg: props.colorMode === "dark" ? "gray.800" : "gray.50",
			boxShadow: "dark-lg",
			border: "2px",
			borderRadius: "xl",
			borderColor: props.colorMode === "dark" ? "gray.700" : "gray.200",
		},
	}),
};

const defaultProps = {
	variant: "toolbar",
}

const Menu = { variants, defaultProps };
export default Menu;
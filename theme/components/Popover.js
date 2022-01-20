

const variants = {
	solid: (props) => ({
		popper: {
			mr: "4"
		},
		content: {
			mr: "4",
			bg: props.colorMode === "dark" ? "gray.800" : "gray.50",
			boxShadow: "dark-lg",
			border: "2px",
			borderRadius: "xl",
			borderColor: props.colorMode === "dark" ? "gray.700" : "gray.200",
		},
		header: {
			border: "none"
		},
		footer: {
			border: "none",
			pt: "none"
		},
	}),
};

const defaultProps = {
	variant: "solid",
};

const Popover = { defaultProps, variants };
export default Popover;

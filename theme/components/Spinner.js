const variants = {
	centered: (props) => ({
		position: "absolute",
		left: "0",
		right: "0",
		top: "0",
		bottom: "0",
		margin: "auto",
		zIndex: "docked"
	}),
};

const defaultProps = {
};

const Spinner = { variants, defaultProps };
export default Spinner;

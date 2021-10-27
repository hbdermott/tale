import { mode } from "@chakra-ui/theme-tools"

const Button = (props) => ({
    baseStyle: {
        colorScheme: mode("yellow", "gray.800")(props)
    },
	// styles for different sizes ("sm", "md", "lg")
	// sizes: {},
	// // styles for different visual variants ("outline", "solid")
	// variants: {},
	// default values for `size` and `variant`
	defaultProps: {
		size: "lg",
		variant: "ghost",
	},
})

export default Button;
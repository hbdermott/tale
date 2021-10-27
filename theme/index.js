// theme/index.js
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/alata";
// Component style overrides
import Button from "./components/Button";
const overrides = {
	fonts: {
		heading: "Open Sans",
		body: "Alata",
	},
	// Other foundational style overrides go here
	components: {
		Button,
		// Other components go here
	},
	initialColorMode: "dark",
	useSystemColorMode: false,
};
export default extendTheme(overrides);

import { extendTheme } from "@chakra-ui/react";
import "@fontsource/alata";
const config = {
	fonts: {
		heading: "Open Sans",
    	body: "Alata",
	},
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
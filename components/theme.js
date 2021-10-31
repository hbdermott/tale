import { extendTheme } from "@chakra-ui/react";
import {Menu} from '../theme/components/Menu'
import "@fontsource/alata";
const config = {
	// fonts: {
	// 	heading: "Open Sans",
    // 	body: "Alata",
	// },
	components: {
		MenuButton: {
			defaultProps: {
				colorScheme: "blue"
			},
			baseStyle: {
				backgroundColor: "orange"
			}
		}
	},
	// initialColorMode: "dark",
	// useSystemColorMode: false,
};

const theme = extendTheme(config);



export default theme;
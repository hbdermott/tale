// theme/index.js
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/alata";
import config from './config'
import components from "./components";
import { global } from "./global";
export const theme = {
	styles: {global},
	components,
	config,
};

export default extendTheme(theme);
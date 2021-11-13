// theme/index.js
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/alata";
import config from './config'
import components from "./components";

export const theme = {
	components,
	config,
};

export default extendTheme(theme);
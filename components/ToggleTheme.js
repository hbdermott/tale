import { IconButton } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleTheme = () => {
 const { colorMode, toggleColorMode } = useColorMode()
  return (
      <IconButton onClick={toggleColorMode} aria-label="Toggle Color Theme" icon={colorMode === "light" ? <MoonIcon/> : <SunIcon/>} />
    )
}
export default ToggleTheme;
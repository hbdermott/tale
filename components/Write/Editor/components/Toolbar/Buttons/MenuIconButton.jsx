import { MenuButton } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/button";
const MenuIconButton = (props) => {
    return <MenuButton as={IconButton} p={2} {...props}/>
}
export default MenuIconButton;
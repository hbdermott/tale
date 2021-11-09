import { IconButton } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { ArrowEnterLeft, BookOpen, Edit, Navigation } from "@styled-icons/fluentui-system-filled";
import LoginOrOut from "./LoginOrOut";

const NavbarMenu = () => {
    return (
			<Menu>
				<MenuButton
					as={IconButton}
					aria-label="Options"
					icon={<Navigation />}
					variant="outline"
				/>
				<MenuList>
					<MenuItem icon={<BookOpen />} command="⌘T">
						Read
					</MenuItem>
					<MenuItem icon={<Edit />} command="⌘N">
						Write
					</MenuItem>
					{/* <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
						Profile
					</MenuItem> */}
					<MenuItem icon={<ArrowEnterLeft />} command="⌘O">
						<LoginOrOut></LoginOrOut>
					</MenuItem>
				</MenuList>
			</Menu>
		);
}

export default NavbarMenu

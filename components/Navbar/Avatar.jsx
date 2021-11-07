import { Avatar } from "@chakra-ui/avatar";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";

const AvatarMenu = ({name, image}) => {
    return (
			<Menu>
				<MenuButton
					// as={() => <Avatar name={name} src={image}/>}
					aria-label="Options"
					variant="outline"
				/>
				<MenuList>
					<MenuItem  command="⌘T">
						New Tab
					</MenuItem>
					<MenuItem command="⌘N">
						New Window
					</MenuItem>
					<MenuItem  command="⌘⇧N">
						Open Closed Tab
					</MenuItem>
					<MenuItem command="⌘O">
						Open File...
					</MenuItem>
				</MenuList>
			</Menu>
		);
}

export default AvatarMenu

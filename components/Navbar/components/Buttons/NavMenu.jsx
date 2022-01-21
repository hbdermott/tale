
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BookOpen, CalligraphyPen, Navigation } from "@styled-icons/fluentui-system-filled";
import Link from "next/link";

const NavMenu = () => {
    return (
			<Menu>
				<MenuButton
					as={IconButton}
					aria-label="Options"
					icon={<Navigation width="24px" />}
					variant="outline"
				/>
				<MenuList>
					<Link href="/read" passHref alt="Read Page">
						<MenuItem icon={<BookOpen width="24px" />}>
								Read
						</MenuItem>
					</Link>
					<Link href="/write" passHref alt="Write Page">
						<MenuItem icon={<CalligraphyPen width="24px" />}>
								Write
						</MenuItem>
					</Link>
				</MenuList>
			</Menu>
		);
}

export default NavMenu;
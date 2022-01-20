import { Button, IconButton } from "@chakra-ui/button";
import {
	Navigation,
} from "@styled-icons/fluentui-system-filled";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../context/User";
import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverHeader, PopoverBody, PopoverFooter } from "@chakra-ui/popover";
import { HStack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import Login from "../../../Login/Login";
import { useStyleConfig } from "@chakra-ui/system";
const NavbarPopover = () => {
	const { loading, user, logout } = useAuth();
	const [loggedIN, setLoggedIN] = useState(false);
	// const popoverStyle = useStyleConfig("PopoverMenu", {});
	useEffect(() => {
		if (!loading && user) {
			setLoggedIN(true);
		} else if (!loading && !user) {
			setLoggedIN(false);
		}
	}, [loading, user]);

	return (
		<Popover direction="rtl" isLazy lazyBehavior="keepMounted">
			<PopoverTrigger>
				<IconButton icon={<Navigation width="24px" />} />
			</PopoverTrigger>
			<PopoverContent
			>
				<PopoverCloseButton size="md" />
				<PopoverHeader>
					<Heading size="md" p={3}></Heading>
				</PopoverHeader>
				<PopoverBody m={0} p={0}>
					{/* <HStack height="50px" spacing={0}>
						<MenuButton href="/read">Read</MenuButton>
						<Divider orientation="vertical" size="lg" />
						<MenuButton href="/write">Write</MenuButton>
					</HStack> */}
					<PopoverFooter>
						{loggedIN && (
							<HStack>
								{loggedIN && <Link href="/profile" ><Button>Profile</Button></Link>}
								{loggedIN && <Button onClick={logout}>Logout</Button>}
							</HStack>
						)}
						{!loggedIN && <Login/>}
					</PopoverFooter>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default NavbarPopover;

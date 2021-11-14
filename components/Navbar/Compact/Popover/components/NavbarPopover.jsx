import { Button, IconButton } from "@chakra-ui/button";
import {
	Navigation,
} from "@styled-icons/fluentui-system-filled";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../../context/User";
import Link from "next/link";
import { Popover, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverHeader, PopoverArrow, PopoverBody, PopoverFooter } from "@chakra-ui/popover";
import ThemeButton from "../../../components/Buttons/ThemeButton";
import GithubButton from "../../../components/Buttons/GithubButton";
import { Center, Divider, Flex, HStack, VStack } from "@chakra-ui/layout";
import ProviderLogins from "../../../../Login/ProviderLogins";
import { Text, Heading } from "@chakra-ui/layout";
import PageLinks from "../../../components/PageLinks";
import MenuButton from "./MenuButton";
import LoginOrOut from "../../../components/Buttons/LoginOrOut";
import Login from "../../../../Login/Login";
const NavbarPopover = () => {
	const { loading, user } = useAuth();
	const [loggedIN, setLoggedIN] = useState(false);
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
				w="min-content"
				border="none"
				boxShadow="dark-lg"
				right="10px"
				top="10px"
				p={0}
				style={{ zIndex: 100 }}
			>
				<PopoverCloseButton size="md" />
				<PopoverHeader>
					<Heading size="md">Menu</Heading>
				</PopoverHeader>
				<PopoverBody m={0} p={0}>
					<HStack height="50px" spacing={0}>
						<MenuButton href="/read">Read</MenuButton>
						<Divider orientation="vertical" size="lg" />
						<MenuButton href="/write">Write</MenuButton>
					</HStack>
					<PopoverFooter>
						{loggedIN && (
							<HStack>
								{loggedIN && <Link href="/profile" ><Button>Profile</Button></Link>}
								{loggedIN && <LoginOrOut />}
							</HStack>
						)}
						{!loggedIN && <Login></Login>}
					</PopoverFooter>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default NavbarPopover;

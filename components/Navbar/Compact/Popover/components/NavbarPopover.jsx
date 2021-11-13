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
import { Center, Flex, HStack, VStack } from "@chakra-ui/layout";
import ProviderLogins from "../../../../Login/ProviderLogins";
import { Text, Heading } from "@chakra-ui/layout";
import PageLinks from "../../../components/PageLinks";
import MenuButton from "./MenuButton";
import LoginOrOut from "../../../components/Buttons/LoginOrOut";
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
				<PopoverCloseButton />
				<PopoverHeader>Menu</PopoverHeader>
				<PopoverBody m={0} p={0}>
					<MenuButton href="/read">Read</MenuButton>
					<MenuButton href="/write">Write</MenuButton>
					{loggedIN && (
						<MenuButton href="/profile">Profile</MenuButton>
					)}
					{/* {!loggedIN && <ProviderLogins />} */}
				</PopoverBody>
				<PopoverFooter>
					<Center>
						<HStack spacing={2}>
							<ThemeButton />
							<GithubButton />
                            <LoginOrOut/>
						</HStack>
					</Center>
				</PopoverFooter>
			</PopoverContent>
		</Popover>
	);
};

export default NavbarPopover;

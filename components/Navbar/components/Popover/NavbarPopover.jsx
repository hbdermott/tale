import { Button, IconButton } from "@chakra-ui/button";
import {
	SignOut, PersonCircle
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

	useEffect(() => {
		if (!loading && user) {
			setLoggedIN(true);
		} else if (!loading && !user) {
			setLoggedIN(false);
		}
	}, [loading, user]);

	return (

		loggedIN ? <IconButton onClick={logout} icon={<SignOut width="24px"/>}/> : (<Popover direction="rtl" isLazy lazyBehavior="keepMounted">
			<PopoverTrigger>
				<IconButton icon={<PersonCircle width="24px" />} />
			</PopoverTrigger>
			<PopoverContent
			>
				<PopoverCloseButton size="md" />
				<PopoverHeader>
					<Heading size="md" p={3}></Heading>
				</PopoverHeader>
				<PopoverBody m={0} p={0}>
					<PopoverFooter>
						<Login/>
					</PopoverFooter>
				</PopoverBody>
			</PopoverContent>
		</Popover>)
		
	);
};

export default NavbarPopover;

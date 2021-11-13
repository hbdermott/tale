import { Flex, HStack } from "@chakra-ui/layout";
import ThemeButton from "../components/Buttons/ThemeButton";
import NavbarPopover from "./Popover/components/NavbarPopover";
import LogoButton from "../components/Buttons/LogoButton";
import GithubButton from "../components/Buttons/GithubButton";
const NavbarCompact = (props) => {
    return (
			<Flex
				backgroundColor="#33333333"
				backdropFilter="blur(5px)"
				w="100%"
				p={3}
				zIndex={1000}
				// position="sticky"
				// top={0}
				// m={0}
				// p={0}
				justify="flex-end"
				align="center"
				{...props}
			>
				{/* <LogoButton /> */}
				<HStack>
					<GithubButton/>
					<ThemeButton />
					<NavbarPopover />
				</HStack>
			</Flex>
		);
}

export default NavbarCompact

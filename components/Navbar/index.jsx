import { Flex, HStack } from "@chakra-ui/layout";
import ThemeButton from "./components/Buttons/ThemeButton";
import NavbarPopover from "./components/Popover/NavbarPopover";
import GithubButton from "./components/Buttons/GithubButton";
import NavMenu from "./components/Buttons/NavMenu";
const Navbar = ({sticky, children, ...rest}) => {
    return (
			<Flex
				backgroundColor="#33333333"
				backdropFilter="blur(5px)"
				w="100%"
				p={3}
				zIndex={1000}
				position={sticky ? "sticky" : "static"}
				top={0}
				justify={"space-between"}
				align="center"
				{...rest}
			>
				<NavMenu/>
				{children}
				<HStack>
					<GithubButton/>
					<ThemeButton />
					<NavbarPopover />
				</HStack>
			</Flex>
		);
}

export default Navbar

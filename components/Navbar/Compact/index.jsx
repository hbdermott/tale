import { Flex } from "@chakra-ui/layout";
import NavbarPopover from "./Popover/components/NavbarPopover";

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
					<NavbarPopover/>
			</Flex>
		);
}

export default NavbarCompact

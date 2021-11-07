import { ButtonGroup } from '@chakra-ui/button';
import { Box, Flex, HStack } from '@chakra-ui/layout';
import ModalLogin from '../Login/Modal';
import AvatarMenu from './Avatar';
import GithubButton from './GithubButton';
import LoginOrOut from './LoginOrOut';
import PageLinks from './PageLinks';
import ThemeButton from './ThemeButton';

const Navbar = (props) => {
    return (
			<Flex
				backgroundColor="#33333333"
				backdropFilter="blur(5px)"
				w="100%"
				zIndex={1000}
				position="sticky"
				top={0}
				m={0}
				p={0}
				justify="space-between"
                align="center"
			>
				<PageLinks />
                <ButtonGroup spacing={4}>
                    <ThemeButton />
                    <GithubButton />
                    <LoginOrOut />
                    <AvatarMenu />
                </ButtonGroup>
			</Flex>
		);
}

export default Navbar;

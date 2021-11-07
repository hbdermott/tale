import { Flex } from '@chakra-ui/layout';
import ModalLogin from '../Login/Modal';
import GithubButton from './GithubButton';
import LoginOrOut from './LoginOrOut';
import PageLinks from './PageLinks';
import ThemeButton from './ThemeButton';

const Navbar = (props) => {
    return (
        <Flex w="100%" align="center" justify="space-around" p={3}>
            <ThemeButton/>
            <PageLinks/>
            <LoginOrOut/>
            <GithubButton/>
        </Flex>
    )
}

export default Navbar;

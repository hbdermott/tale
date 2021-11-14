import { ButtonGroup } from '@chakra-ui/button';
import { Box, Flex, HStack } from '@chakra-ui/layout';
import GithubButton from './components/Buttons/GithubButton';
import LoginOrOut from './components/Buttons/LoginOrOut';
import PageLinks from './components/PageLinks';
import ThemeButton from './components/Buttons/ThemeButton';
import NavbarCompact from './Compact'
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';

const Navbar = ({sticky, children, ...rest}) => {
	const [compact, setCompact] = useState(false);
	const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
	useEffect(() => {
		isLargerThan768 ? setCompact(false) : setCompact(true);
	}, [isLargerThan768]);

    return (
			<>
				{compact ? (
					<NavbarCompact sticky={sticky} {...rest} >{children}</NavbarCompact>
				) : (
					<Flex
						backgroundColor="#33333333"
						backdropFilter="blur(5px)"
						w="100%"
						pos={sticky ? "sticky" : "static"}
						top={0}
						pr={5}
						zIndex={1000}
						justify="space-between"
						align="center"
						{...rest}
					>
						<PageLinks />
						{children}
						<ButtonGroup spacing={4}>
							<GithubButton />
							<ThemeButton />
							<LoginOrOut />
						</ButtonGroup>
					</Flex>
				)}
			</>
		);
}

export default Navbar;

import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme';
import ToggleTheme from '../components/ToggleTheme';
import { UserProvider } from '../context/User';




function MyApp({ Component, pageProps }) {
  
  return (
		<UserProvider>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
				<ToggleTheme />
			</ChakraProvider>
		</UserProvider>
	);

}

export default MyApp

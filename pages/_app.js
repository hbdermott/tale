import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../components/theme';
import ToggleTheme from '../components/ToggleTheme';
import { UserProvider } from '../context/User';




function MyApp({ Component, pageProps }) {
  
  return (
		<UserProvider>
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</UserProvider>
	);

}

export default MyApp

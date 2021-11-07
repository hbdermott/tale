import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../components/theme';
import { UserProvider } from '../context/User';
import Layout from '../components/Layout';




function MyApp({ Component, pageProps }) {
  
  return (
		<UserProvider>
			<ChakraProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</UserProvider>
	);

}

export default MyApp

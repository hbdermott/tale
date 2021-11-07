import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme/index'
import { UserProvider } from '../context/User';
import Layout from '../components/Layout';




function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  return (
		<UserProvider>
			<ChakraProvider theme={theme}>
					{getLayout(<Component {...pageProps} />)}
			</ChakraProvider>
		</UserProvider>
	);

}

export default MyApp

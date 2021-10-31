import { useEffect } from "react";
import { useAuth } from "../context/User";
import { useRouter } from "next/router";
import { Box, Center, Flex, Heading, HStack, VStack } from "@chakra-ui/layout";
import ProviderLogin from "../components/Login/Provider";
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from "@firebase/auth";
import EmailLogin from "../components/Login/Email";
import { FacebookF, Github, Google } from "@styled-icons/fa-brands";
const Login = () => {
	const {user} = useAuth();
	const router = useRouter();
	useEffect(() => {
		if (user) router.push("/");
	}, [user, router]);
    return (
			<Flex h="100vh" justify="center" align="center">
				<Box rounded="lg" boxShadow="dark-lg" bg="#333">
					<VStack>
						<Flex w="100%" justify="space-between">
							<Heading mt={3} ml={5} textAlign="center">Login</Heading>
							<HStack pt={2} pr={3}>
								<ProviderLogin
									icon={<FacebookF/>}
									provider={FacebookAuthProvider}
									color="#4267B2"
								/>
								<ProviderLogin
									icon={<Github/>}
									provider={GithubAuthProvider}
								/>
								<ProviderLogin
									icon={<Google/>}
									provider={GoogleAuthProvider}
								/>
							</HStack>
						</Flex>
						<Center>
							<EmailLogin />
						</Center>
					</VStack>
				</Box>
			</Flex>
		);
}

export default Login;
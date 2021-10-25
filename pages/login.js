import { useEffect } from "react";
import { useAuth } from "../context/User";
import { useRouter } from "next/router";
import { Box, Center, Container, Flex, Heading, HStack, Spacer, VStack } from "@chakra-ui/layout";
import { FcGoogle } from "react-icons/fc";
import { FiGithub, FiFacebook } from "react-icons/fi";
import ProviderLogin from "../components/Login/Provider";
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from "@firebase/auth";
import EmailLogin from "../components/Login/Email";
const Login = () => {
	const {user} = useAuth();
	const router = useRouter();
	useEffect(() => {
		if (user) router.push("/");
	}, [user]);
    return (
			<Flex h="100vh" justify="center" align="center">
				<Box rounded="lg" boxShadow="dark-lg" bg="#333">
					<VStack>
						<Flex w="100%" justify="space-between">
							<Heading mt={3} ml={5} textAlign="center">Login</Heading>
							<HStack pt={2} pr={3}>
								<ProviderLogin
									icon={<FiFacebook />}
									provider={FacebookAuthProvider}
									color="#4267B2"
								/>
								<ProviderLogin
									icon={<FiGithub />}
									provider={GithubAuthProvider}
								/>
								<ProviderLogin
									icon={<FcGoogle />}
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
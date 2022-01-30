import { HStack } from "@chakra-ui/layout";
import FacebookLogin from "./components/FacebookLogin";
import GithubLogin from "./components/GithubLogin";
import GoogleLogin from "./components/GoogleLogin";
const ProviderLogin = () => {
	return (
			<HStack>
				<GoogleLogin/>
				<FacebookLogin/>
				<GithubLogin/>
			</HStack>
	);
};

export default ProviderLogin;

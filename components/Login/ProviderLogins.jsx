import { HStack } from "@chakra-ui/layout";
import ProviderLogin from "./Provider";
import {
	GoogleAuthProvider,
	GithubAuthProvider,
	FacebookAuthProvider,
} from "@firebase/auth";
import { FacebookF, Github, Google } from "@styled-icons/fa-brands";
const ProviderLogins = () => {
	return (
			<HStack>
				<ProviderLogin
					icon={<FacebookF size="24px" />}
					provider={FacebookAuthProvider}
					color="#4267B2"
				/>
				<ProviderLogin
					icon={<Github size="24px" />}
					provider={GithubAuthProvider}
				/>
				<ProviderLogin
					icon={<Google size="24px" color="#de5246" />}
					provider={GoogleAuthProvider}
				/>
			</HStack>
	);
};

export default ProviderLogins;

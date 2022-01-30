import ProviderLoginIcon from "./ProviderLoginIcon";
import { Github } from "../../Icons";
import { GithubAuthProvider } from "firebase/auth";
const GithubLogin = () => {
    return (
			<ProviderLoginIcon
				icon={<Github/>}
				provider={GithubAuthProvider}
			/>
		);
}

export default GithubLogin;
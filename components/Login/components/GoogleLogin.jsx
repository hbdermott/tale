import { GoogleAuthProvider } from "firebase/auth"
import { Google } from "../../Icons"
import ProviderLoginIcon from "./ProviderLoginIcon"

const GoogleLogin = () => {
    return (
        <ProviderLoginIcon
					icon={<Google/>}
					provider={GoogleAuthProvider}
				/>
    )
}

export default GoogleLogin;
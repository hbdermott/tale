import { FacebookAuthProvider } from "firebase/auth"
import ProviderLoginIcon from "./ProviderLoginIcon"
import { Facebook } from "../../Icons";
const FacebookLogin = () => {
    return (
        <ProviderLoginIcon
                        icon={<Facebook/>}
                        provider={FacebookAuthProvider}
                        color="#4267B2"
                    />
    )
}
export default FacebookLogin;
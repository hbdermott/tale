import { IconButton } from "@chakra-ui/button";
import { useState } from "react";
import { useAuth } from "../../context/User";

const ProviderLogin = ({provider, icon, color}) => {
	const {loginWithProvider, linkProvider} = useAuth();
	const [isLoading, setLoading] = useState(false);
	return (
		<IconButton
			isLoading={isLoading}
			onClick={async () => {
				setLoading(true);
				const res = await loginWithProvider(provider);
				if(res?.link){
					await loginWithProvider(res.main);
					await linkProvider(res.cred);
				}
				setLoading(false);
			}}
			icon={icon}
            color={color}
		></IconButton>
	);
};

export default ProviderLogin;

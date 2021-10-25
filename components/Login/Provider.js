import { IconButton } from "@chakra-ui/button";
import { useState } from "react";
import { useAuth } from "../../context/User";

const ProviderLogin = ({provider, icon, color = 'white'}) => {
	const { loginWithProvider } = useAuth();
	const [loading, setLoading] = useState(false);
	return (
		<IconButton
			isLoading={loading}
			onClick={async () => {
				setLoading(true);
				await loginWithProvider(provider);
				setLoading(false);
			}}
			icon={icon}
            color={color}
		></IconButton>
	);
};

export default ProviderLogin;

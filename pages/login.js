import { GithubAuthProvider, FacebookAuthProvider, GoogleAuthProvider} from "@firebase/auth";
import { Button } from "@chakra-ui/button";;
import { useEffect } from "react";
import { useAuth } from "../context/User";
import { useRouter } from "next/dist/client/router";

const Login = () => {
	const {user, loading, ...rest} = useAuth();
	const router = useRouter();
	useEffect(() => {
		if (user) router.push("/");
	}, [user]);
    return (
			<>
				<Button onClick={() => signInOption(GithubAuthProvider)}>Github</Button>
				<Button onClick={() => signInOption(GoogleAuthProvider)}>Google</Button>
				<Button onClick={() => signInOption(FacebookAuthProvider)}>Facebook</Button>
				<div></div>
			</>
		);
}

export default Login;
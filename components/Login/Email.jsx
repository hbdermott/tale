import { Input } from "@chakra-ui/input";

export const EmailLogin = (props) => {
    return (
        <Input
            {...props}
            id="email"
            size="lg"
            width="100%"
            variant="filled"
            placeholder="Email"
		/>
    )
}

export default EmailLogin;
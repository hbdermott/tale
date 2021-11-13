import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useState } from "react";

const PasswordLogin = (props) => {
    const [show, setShow] = useState(false);
    return (
			<InputGroup>
				<Input
					{...props}
					type={show ? "text" : "password"}
					size="lg"
					pr="90px"
					variant="filled"
					placeholder="Enter password"
				/>
				<InputRightElement h="100%" w="max-content">
					<Button w="80px" size="lg" onClick={() => setShow(!show)}>
						{show ? "Hide" : "Show"}
					</Button>
				</InputRightElement>
			</InputGroup>
		);
}

export default PasswordLogin

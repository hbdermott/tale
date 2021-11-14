import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import { Password } from "@styled-icons/fluentui-system-filled";
import { useState } from "react";

const PasswordLogin = (props) => {
    const [show, setShow] = useState(false);
    return (
		<HStack spacing={0}>
			<InputGroup size="lg">
				<Input
					{...props}
					type={show ? "text" : "password"}
					variant="filled"
					placeholder="Enter password"
					pr="20px"
					borderRightRadius={0}
				/>
				<InputLeftElement><Password width="24px"/></InputLeftElement>
			</InputGroup>
			<Button borderLeftRadius={0} width="60px" onClick={() => setShow(!show)}>
						{show ? "Hide " : "Show"}
			</Button>
		</HStack>
	);
}

export default PasswordLogin

import { Input, InputGroup, InputLeftAddon, InputLeftElement } from "@chakra-ui/input";
import { Mail } from "@styled-icons/fluentui-system-filled";

export const Email = (props) => {
    return (
			<InputGroup size="lg">
				<InputLeftElement>
					<Mail width="24px" />
				</InputLeftElement>
				<Input
					{...props}
					id="email"
					size="lg"
					width="100%"
					variant="filled"
					placeholder="Email"
				/>
			</InputGroup>
		);
}

export default Email;
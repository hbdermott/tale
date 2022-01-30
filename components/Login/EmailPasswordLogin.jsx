import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { HStack, VStack } from "@chakra-ui/layout";
import { InputGroup } from "@chakra-ui/react";
import { Mail, Password } from "@styled-icons/fluentui-system-filled";
import { useState } from "react";
import { useAuth } from "../../context/User";
import ProviderLogins from "./ProviderLogin";
import { InputLeftElement } from "@chakra-ui/react";

const EmailPasswordLogin = () => {
    const {login} = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSubmitting, setSubmitting] = useState(false);
    const [show, setShow] = useState(false);
    return (
						<VStack spacing={3}>
									<FormControl
										isRequired
										isInvalid={!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)}
									>
										<InputGroup size="lg">
											<InputLeftElement>
												<Mail size="24px" />
											</InputLeftElement>
											<Input
												id="email"
												type="email"
												size="lg"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												width="100%"
												variant="filled"
												placeholder="Email..."
											/>
										</InputGroup>
									</FormControl>
									<FormControl
										isRequired
										isInvalid={password === ''}
									>
										<HStack spacing={0}>
											<InputGroup size="lg">
												<Input
													type={show ? "text" : "password"}
													variant="filled"
													placeholder="Password..."
													pr="20px"
													borderRightRadius={0}
													value={password}
													onChange={(e) => setPassword(e.target.value)}
												/>
												<InputLeftElement><Password width="24px"/></InputLeftElement>
											</InputGroup>
											<Button borderLeftRadius={0} width="60px" onClick={() => setShow(!show)}>
														{show ? "Hide " : "Show"}
											</Button>
										</HStack>
									</FormControl>
							<HStack>
								<ProviderLogins/>
								<Button
									type="submit"
									variant="submit"
									isLoading={isSubmitting}
									onClick={async () => {
										setSubmitting(true)
										await login(email, password);
										setSubmitting(false);
					
									}}
								>
									Submit
								</Button>
							</HStack>
						</VStack>
		);
}

export default EmailPasswordLogin;
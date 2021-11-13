import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Input, InputRightElement } from "@chakra-ui/input";
import { HStack, VStack } from "@chakra-ui/layout";
import { InputGroup } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useAuth } from "../../context/User";
import PasswordLogin from "./Password";
import ProviderLogins from "./ProviderLogins";

const EmailLogin = () => {
    const {login} = useAuth();
    return (
			<Formik
				initialValues={{ email: "", password: "" }}
				validate={(values) => {
					const errors = {};
					if (!values.email) {
						errors.email = "Required";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "Invalid email address";
					}
					if (!values.password) {
						errors.password = "Required";
					}
					return errors;
				}}
				onSubmit={async (values, { setSubmitting }) => {
					await login(values.email, values.password);
					setSubmitting(false);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<VStack spacing={3}>
							<Field type="email" name="email">
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.email && form.touched.email}
									>
										{/* <FormLabel htmlFor="email">Email</FormLabel> */}
										<Input
											{...field}
											id="email"
											size="lg"
											width="100%"
											variant="filled"
											placeholder="Email"
										/>
										{/* <FormErrorMessage></FormErrorMessage> */}
									</FormControl>
								)}
							</Field>
							<Field type="password" name="password">
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.password && form.touched.password}
									>
										{/* <FormLabel htmlFor="password">Password</FormLabel> */}
										<PasswordLogin id="password" />

										{/* <FormErrorMessage></FormErrorMessage> */}
									</FormControl>
								)}
							</Field>
							<HStack>
								<ProviderLogins/>
								<Button
									px={6}
									type="submit"
									size="lg"
									isLoading={isSubmitting}
								>
									Submit
								</Button>
							</HStack>
						</VStack>
					</Form>
				)}
			</Formik>
		);
}

export default EmailLogin;
import React, { useRef } from "react";
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/modal";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Flex } from "@chakra-ui/layout";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { Link } from "@styled-icons/fluentui-system-filled";

const ModalImport = ({
	isOpen,
	onClose,
    editor,
	label,
    type,
	animation = "slideInBottom",
	named = false,
	namedLabel,
	...props
}) => {
	const firstField = useRef();
    // const finalFocus = useRef();
	return (
		<Modal
			// closeOnOverlayClick={false}
			motionPreset="slideInBottom"
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			initialFocusRef={firstField}
            // finalFocusRef={finalFocus}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalHeader>{`Import ${type}`}</ModalHeader>
				<Formik
					initialValues={{ url: "", reference: "" }}
					validate={(values) => {
						const errors = {};
						if (!values.url) {
							errors.url = "URL Required";
						} else if (
							!values.url.match(
								/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
							)
						) {
							errors.url = "Invalid URL";
						}
						return errors;
					}}
					onSubmit={async (values) => {
                        if(type === 'Link')
                            editor.chain().focus().setLink({href: values.url}).run()
                        else if(type === 'Image'){
						    editor.chain().focus('end').setImage({ src: values.url }).run();
                        }
						// editor.focus();
						onClose();
					}}
				>
					{({ errors }) => (
						<Form>
							<ModalBody>
								<FormControl id="url">
									{label && <FormLabel>{label}</FormLabel>}
									<InputGroup>
										<InputLeftElement
											pointerEvents="none"
											color="gray.300"
											backgroundColor="gray.600"
											borderLeftRadius={5}
                                            zIndex={0}
										>
											<Link style={{ width: "24px" }} />
										</InputLeftElement>
										<Field type="text" name="url">
											{({ field, form: { errors } }) => (
												<Input
													isInvalid={errors.url}
													{...field}
													ref={firstField}
													placeholder="A nice link..."
													type="text"
													pl={12}
												/>
											)}
										</Field>
									</InputGroup>
								</FormControl>
								{named && (
									<FormControl id="reference">
										{namedLabel && <FormLabel>{namedLabel}</FormLabel>}
										<InputGroup>
											<InputLeftElement
												pointerEvents="none"
												color="gray.300"
												backgroundColor="gray.600"
												style={{ zIndex: 0 }}
											>
												<Link style={{ width: "24px" }} />
											</InputLeftElement>
											<Field type="text" name="reference">
												{({ field }) => (
													<Input
														{...field}
														placeholder="How it Looks..."
														type="text"
														pl={12}
													/>
												)}
											</Field>
										</InputGroup>
									</FormControl>
								)}
							</ModalBody>
							<ModalFooter>
							<Flex w="100%" align="center" justify="flex-start">
									<ErrorMessage name="url">
										{(msg) => (
											<Alert borderRadius={4} mr={3} status="error">
												<AlertIcon />
												<AlertTitle mr={2}>{msg}</AlertTitle>
											</Alert>
										)}
									</ErrorMessage>
								</Flex>
								<Button type="submit" variant="submit">
									Sumbit
								</Button>
							</ModalFooter>
						</Form>
					)}
				</Formik>
			</ModalContent>
		</Modal>
	);
};

export default ModalImport;

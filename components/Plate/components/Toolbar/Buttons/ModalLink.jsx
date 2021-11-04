
import React from "react";
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
import { useStoreEditorState } from "@udecode/plate-core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Flex } from "@chakra-ui/layout";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { Link } from "@styled-icons/fluentui-system-filled";

const ModalLink = ({
	isOpen,
	onClose,
	insert,
	editorID = "main-editor",
	label,
	header = "Import Media",
	animation = "slideInBottom",
	named = false,
	namedLabel,
	...props
}) => {
	
	const editor = useStoreEditorState(editorID);
	return (
		<Modal
			// closeOnOverlayClick={false}
			motionPreset="slideInBottom"
			isOpen={isOpen}
			onClose={onClose}
			isCentered
		>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalHeader>{header}</ModalHeader>
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
						// e.preventDefault();
						if (named) insert(editor, values.url, values.reference);
						else insert(editor, values.url);
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
											style={{ zIndex: 0 }}
										>
											<Link style={{ width: "24px" }} />
										</InputLeftElement>
										<Field
											type="text"
											name="url"
											render={({ field, form: { errors } }) => (
												<Input
													isInvalid={errors.url}
													{...field}
													placeholder="A nice link..."
													type="text"
													pl={12}
												/>
											)}
										/>
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
											<Field
												type="text"
												name="reference"
												render={({ field }) => (
													<Input
														{...field}
														placeholder="How it looks..."
														type="text"
														pl={12}
													/>
												)}
											/>
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
								<Button type="submit" color="green.400">
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

export default ModalLink;
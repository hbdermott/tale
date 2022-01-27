import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup } from "@chakra-ui/input";
import {  HStack, VStack } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { CheckboxGroup } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/textarea";
import { Field, Form, Formik } from "formik";
import React, {useRef} from "react";
import { Button } from "@chakra-ui/button";
import { useAuth } from "../../context/User";
import { useRouter } from "next/router";
import { postBook, updateBook } from "../../lib/firebase/postBook";
import Card from "../Read/Feed/Card/Card";


const Publish = ({isOpen, onClose, book, editor}) => {
    const { user } = useAuth();
    const router = useRouter();
	const firstField = useRef();
		return (
			<>
				<Drawer
					isOpen={isOpen}
					size="md"
					placement="right"
					initialFocusRef={firstField}
					onClose={onClose}
				>
					<DrawerOverlay />
					<DrawerContent overflowY="scroll">
						<DrawerCloseButton mt={1.5} size="md" />
						<DrawerHeader borderBottomWidth="1px">Book Details</DrawerHeader>
						<Formik
							initialValues={{
								title: book?.title || "",
								description: book?.description || "",
								image: book?.image || "",
								genres: [],
							}}
							validate={(values) => {
								const errors = {};
								for (const value in values) {
									if (value === "genres") continue;
									if (values[value] === "") {
										errors[value] = "Required";
									} else if (
										value === "image" &&
										!values[value].match(
											/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
										)
									) {
										errors.image = "Invalid URL";
									}
								}
								return errors;
							}}
							onSubmit={async (values, { setSubmitting }) => {
								const content = editor.getHTML()
								const bookID = book?.id
									? await updateBook(content, values, book.id)
									: await postBook(content, values, user);
								setSubmitting(false);
								router.push(`/read/${bookID}`);
							}}
						>
							{({ values, isSubmitting }) => (
								<>
									<Form>
										<DrawerBody>
											<VStack mt={5} mb={10} spacing={10}>
												<FormControl id="title">
													<FormLabel htmlFor="title">Title</FormLabel>
													<InputGroup>
														<Field type="text" name="title">
															{({ field, form: { errors } }) => (
																<Input
																	isInvalid={errors.title}
																	id="title"
																	size="lg"
																	variant="filled"
																	isRequired={true}
																	ref={firstField}
																	{...field}
																	placeholder="A strong title..."
																	type="text"
																/>
															)}
														</Field>
													</InputGroup>
												</FormControl>
												<FormControl id="description">
													<FormLabel htmlFor="description">
														Description
													</FormLabel>
													<InputGroup>
														<Field type="text" name="description">
															{({ field, form: { errors } }) => (
																<Textarea
																	isInvalid={errors.description}
																	id="description"
																	{...field}
																	isRequired={true}
																	placeholder="A catchy description..."
																	variant="filled"
																	size="lg"
																	type="text"
																/>
															)}
														</Field>
													</InputGroup>
												</FormControl>
												<FormControl id="image">
													<FormLabel htmlFor="image">Cover Image</FormLabel>
													<InputGroup>
														<Field type="text" name="image">
															{({ field, form: { errors } }) => (
																<Input
																	isInvalid={errors.image}
																	id="image"
																	size="lg"
																	variant="filled"
																	isRequired={true}
																	{...field}
																	placeholder="A cover image..."
																	type="text"
																/>
															)}
														</Field>
													</InputGroup>
												</FormControl>
												<FormControl id="genres">
													<FormLabel htmlFor="genres">Genres</FormLabel>
													<InputGroup>
														<CheckboxGroup colorScheme="green">
															<HStack>
																{/* <Field type="checkbox" name="genres">
																	<Checkbox value="Action">Action</Checkbox>
																</Field>
																<Field type="checkbox" name="genres">
																	<Checkbox value="Adventure">Adventure</Checkbox>
																</Field>
																<Field type="checkbox" name="genres">
																	<Checkbox value="the goods">The goods</Checkbox>
																</Field> */}
															</HStack>
														</CheckboxGroup>
													</InputGroup>
													<FormHelperText>Soon to come!</FormHelperText>
												</FormControl>

												<Card
													example
													{...values}
													likes={0}
													author={user?.name || "Your Name"}
												/>
											</VStack>
										</DrawerBody>
										<DrawerFooter borderTopWidth="1px">
											<Button
												variant="submit"
												type="submit"
												disabled={isSubmitting}
												isLoading={isSubmitting}
											>
												Publish
											</Button>
										</DrawerFooter>
									</Form>
								</>
							)}
						</Formik>
					</DrawerContent>
				</Drawer>
			</>
		);
	};
export default Publish;

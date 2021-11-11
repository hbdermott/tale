import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputLeftAddon, InputRightAddon } from "@chakra-ui/input";
import { Box, Flex, HStack, Stack, VStack } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { CheckboxGroup } from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import { Textarea } from "@chakra-ui/textarea";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Checkbox } from "@chakra-ui/checkbox";
import { Button } from "@chakra-ui/button";
import { getPlateState, useStoreEditorRef, useStoreEditorState, useStoreEditorValue } from "@udecode/plate-core";
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 
import { db } from "../../app/firebase/Firebase";
import { useAuth } from "../../context/User";
import { useRouter } from "next/router";
const BookDrawer = ({isOpen, onClose}) => {
    const value = useStoreEditorValue('main-editor')
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
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader borderBottomWidth="1px">Book Details</DrawerHeader>
						<Formik
							initialValues={{ title: "", description: "", genres: [] }}
							validate={(values) => {
								const errors = {};
								for (const value in values) {
									if (value === "genres") continue;
									if (values[value] === "") {
										errors[value] = "Required";
									}
								}
								return errors;
							}}
							onSubmit={async (values, { setSubmitting }) => {
								console.log("here")
                                const bookRef = await addDoc(collection(db, "books"), {
                                    content: value,
                                })
                                const bookDetailsRef = await setDoc(doc(db, "bookDetails", bookRef.id), {
                                    title: values.title,
                                    description: values.description,
                                    genres: values.genres,
                                    authorID: user.uid,
                                    likes: 0,
                                })
                                setSubmitting(false);
                                router.push('/read');
                            }}
						>
							{({ isSubmitting }) => (
								<>
										<Form>
									<DrawerBody>
											<VStack mt={5} spacing={10}>
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
													<FormHelperText>
														Adding genres is optional.
													</FormHelperText>
												</FormControl>
											</VStack>
									</DrawerBody>
									<DrawerFooter borderTopWidth="1px">
										<Button type="submit" disabled={isSubmitting} isLoading={isSubmitting}>Publish</Button>
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
export default BookDrawer;

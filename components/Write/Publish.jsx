import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup } from "@chakra-ui/input";
import {  VStack } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { Textarea } from "@chakra-ui/textarea";
import React, {useRef} from "react";
import { Button } from "@chakra-ui/button";
import { useAuth } from "../../context/User";
import { useRouter } from "next/router";
import { postBook, updateBook } from "../../lib/firebase/postBook";
import Card from "../Read/Feed/Card/Card";
import {
	AutoComplete,
	AutoCompleteInput,
	AutoCompleteItem,
	AutoCompleteList,
	AutoCompleteTag,
	AutoCompleteCreatable,
} from "@choc-ui/chakra-autocomplete";


const Publish = ({isOpen, onClose, book, updateDetails, editor}) => {
    const { user } = useAuth();
    const router = useRouter();
	const firstField = useRef();
	const [title, setTitle] = React.useState(book?.title || "");
	const [description, setDescription] = React.useState(book?.description || "");
	const [image, setImage] = React.useState(book?.image || "");
	const [tags, setTags] = React.useState(book?.tags || []);
	const [isSubmitting, setSubmitting] = React.useState(false);
	 const genres = [
			"Fantasy",
			"Sci-Fi",
			"Mystery",
			"Romance",
			"Horror",
			"Thriller",
			"Drama",
			"Action",
			"Adventure",
			"Comedy",
			"Non-Fiction",
			"Fiction",
		];
		return (
			<>
				<Drawer
					isOpen={isOpen}
					size="md"
					placement="right"
					initialFocusRef={firstField}
					onClose={() => {
						const details = {
							title,
							description,
							image,
							tags,
						};
						updateDetails(details);
						onClose();
					}}
				>
					<DrawerOverlay />
					<DrawerContent overflowY="scroll">
						<DrawerCloseButton mt={1.5} size="md" />
						<DrawerHeader borderBottomWidth="1px">Book Details</DrawerHeader>
						<DrawerBody>
							<VStack mt={5} mb={10} spacing={10}>
								<FormControl id="title" isRequired>
									<FormLabel htmlFor="title">Title</FormLabel>
									<InputGroup>
										<Input
											isInvalid={title === ""}
											id="title"
											size="lg"
											variant="filled"
											isRequired
											ref={firstField}
											placeholder="A strong title..."
											type="text"
											value={title}
											onChange={(e) => setTitle(e.target.value)}
										/>
									</InputGroup>
								</FormControl>
								<FormControl id="description" isRequired>
									<FormLabel htmlFor="description">Description</FormLabel>
									<InputGroup>
										<Textarea
											isInvalid={description === ""}
											id="description"
											isRequired
											placeholder="A catchy description..."
											variant="filled"
											size="lg"
											type="text"
											value={description}
											onChange={(e) => setDescription(e.target.value)}
										/>
									</InputGroup>
								</FormControl>
								<FormControl id="image" isRequired>
									<FormLabel htmlFor="image">Cover Image</FormLabel>
									<InputGroup>
										<Input
											isInvalid={
												!image.match(
													/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
												)
											}
											id="image"
											size="lg"
											variant="filled"
											isRequired
											placeholder="A cover image..."
											type="text"
											value={image}
											onChange={(e) => setImage(e.target.value)}
										/>
									</InputGroup>
								</FormControl>
								<FormControl id="tags">
									<FormLabel htmlFor="tags">Tags</FormLabel>
									<InputGroup>
										<AutoComplete
											openOnFocus
											multiple
											creatable
											defaultValues={book?.tags}
											onChange={(vals) => setTags(vals)}
										>
											<AutoCompleteInput variant="filled">
												{({ tags }) =>
													tags.map((tag, tid) => (
														<AutoCompleteTag
															key={tid}
															label={tag.label}
															onRemove={tag.onRemove}
														/>
													))
												}
											</AutoCompleteInput>
											<AutoCompleteList>
												{genres.map((genre, cid) => (
													<AutoCompleteItem
														key={`option-${cid}`}
														value={genre}
														textTransform="capitalize"
														_selected={{ bg: "whiteAlpha.50" }}
														_focus={{ bg: "whiteAlpha.100" }}
													>
														{genre}
													</AutoCompleteItem>
												))}
												<AutoCompleteCreatable />
											</AutoCompleteList>
										</AutoComplete>
									</InputGroup>
									<FormHelperText>Tags are optional!</FormHelperText>
								</FormControl>

								<Card
									example
									title={title}
									description={description}
									image={image}
									tags={tags}
									likes={book?.likes || 0}
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
								onClick={async () => {
									setSubmitting(true);
									const details = {
										title,
										description,
										image,
										tags,
									};
									updateDetails(details);
									const content = editor.getHTML();
									const bookID = book?.id
										? await updateBook(content, details, book.id)
										: await postBook(content, details, user);
									setSubmitting(false);
									router.push(`/read/${bookID}`);
								}}
							>
								Publish
							</Button>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</>
		);
	};
export default Publish;

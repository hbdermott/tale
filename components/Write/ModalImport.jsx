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
	const [url, setUrl] = React.useState("");
	const [name, setName] = React.useState("");
	return (
		<Modal
			motionPreset="slideInBottom"
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			initialFocusRef={firstField}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalHeader>{`Import ${type}`}</ModalHeader>
							<ModalBody>
								<FormControl id="url" isRequired>
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
												<Input
													isInvalid={!url.match(
														/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
													)}
													value={url}
													onChange={(e) => {
														setUrl(e.target.value);
													}}
													ref={firstField}
													placeholder="A nice link..."
													type="text"
													pl={12}
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
													<Input
														isInvalid={name === ""}
														value={name}
														onChange={(e) => {
															setName(e.target.value);
														}}
														placeholder="How it Looks..."
														type="text"
														pl={12}
													/>
										</InputGroup>
									</FormControl>
								)}
							</ModalBody>
							<ModalFooter>
								<Button type="submit" variant="submit" onClick={async (values) => {
									if(type === 'Link')
										editor.chain().focus().setLink({href: url}).run()
									else if(type === 'Image'){
										editor.chain().focus('end').setImage({ src: url }).run();
									}
									onClose();
							}}>
									Submit
								</Button>
							</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ModalImport;

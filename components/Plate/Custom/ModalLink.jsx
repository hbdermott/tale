
import React, { useEffect, useState } from "react";
import { useStoreEditorRef } from "@udecode/plate-core";
import { insertImage } from "@udecode/plate-image";
import { useDisclosure } from "@chakra-ui/hooks";
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
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

const ModalLink = ({ header, label = "URL", animation = "slideInBottom", ...props }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [loading, setLoading] = useState(false);
	const [URL, setURL] = useState(false);
	useEffect(() => {
		setLoading(isOpen);
	}, [isOpen]);
	return (
			<Modal
				closeOnOverlayClick={false}
				motionPreset="slideInBottom"
				isOpen={isOpen}
				onClose={onClose}
				isCentered
			>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalHeader>Image URL</ModalHeader>
					<ModalBody>
						<FormControl id="url">
							<FormLabel>URL</FormLabel>
							<Input type="text" onChange={(val) => setURL(val)} />
							{/* <FormHelperText>We'll never share your email.</FormHelperText> */}
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<Button
							color="green.400"
							onClick={async (e) => {
								e.preventDefault();
								URL && insertImage(editor, URL);
								onClose();
							}}
						>
							Sumbit
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ToolbarImage;
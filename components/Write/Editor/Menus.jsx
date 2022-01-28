import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import ModalImport from "../ModalImport";
import Publish from "../Publish";
import Bubble from "./Bubble"
import Floating from "./Floating";
import Toolbar from "./Toolbar"

const Menus = ({editor, book}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
	const { isOpen: isOpenPublish, onOpen: onOpenPublish, onClose: onClosePublish } = useDisclosure();
    const [ImportType, setImportType] = useState(null);
	const [bookDetails, setBookDetails] = useState(book);
	const updateDetails = (details) => {
		setBookDetails(details)
	}
    const importImage = () => {
			setImportType("Image");
			onOpen();
	}
    const importLink = () => {
			setImportType("Link");
			onOpen();
	};
    return (
			<>
				{/* <Floating editor={editor} importImage={importImage}/> */}
				<Bubble editor={editor} importLink={importLink} />
				<Toolbar
					editor={editor}
					importLink={importLink}
					importImage={importImage}
					publish={onOpenPublish}
				/>
				<ModalImport
					editor={editor}
					type={ImportType}
					isOpen={isOpen}
					onClose={onClose}
				/>
				<Publish
					editor={editor}
					book={bookDetails}
					updateDetails={updateDetails}
					isOpen={isOpenPublish}
					onClose={onClosePublish}
				/>
			</>
		);
}

export default Menus;
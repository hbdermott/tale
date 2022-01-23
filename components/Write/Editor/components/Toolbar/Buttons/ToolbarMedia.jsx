import React, { useEffect, useState } from "react";
import { usePlateEditorRef } from "@udecode/plate-core";
import { insertMediaEmbed } from "@udecode/plate-media-embed";
import { useDisclosure } from "@chakra-ui/hooks";
import ToolbarButton from "./Base/ToolbarButton";
import ModalLink from "./Base/ModalLink";

const ToolbarMedia = ({ children, editorID = "main-editor" , ...props }) => {
	const editor = usePlateEditorRef(editorID);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(isOpen);
	}, [isOpen]);
	return (
		<>
			<ToolbarButton
				isLoading={loading}
				onMouseDown={async (e) => {
					e.preventDefault();
					if (!editor) return;
					onOpen();
				}}
				{...props}
			>
				{children}
			</ToolbarButton>
			<ModalLink insert={insertMediaEmbed} isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default ToolbarMedia;

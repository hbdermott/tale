import React, { useEffect, useState } from "react";
import { usePlateEditorRef } from "@udecode/plate-core";
import { insertImage } from "@udecode/plate-image";
import { useDisclosure } from "@chakra-ui/hooks";
import ToolbarButton from "./Base/ToolbarButton";
import ModalLink from "./Base/ModalLink";

const ToolbarImage = ({ children,  editorID = "main-editor", ...props }) => {
	const editor = usePlateEditorRef(editorID);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(isOpen)
    }, [isOpen])
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
			<ModalLink header="Import Image" insert={insertImage} isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default ToolbarImage;
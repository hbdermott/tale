import React, { useEffect, useState } from "react";
import {
	getPluginType,
	usePlateEditorRef,
	getAbove,
	isCollapsed,
} from "@udecode/plate-core";
import { useDisclosure } from "@chakra-ui/hooks";
import ToolbarButton from "./Base/ToolbarButton";
import ModalLink from "./Base/ModalLink";
import { ELEMENT_LINK, upsertLinkAtSelection } from "@udecode/plate-link";

const ToolbarLink= ({ children, editorID = "main-editor", ...props }) => {
	const editor = usePlateEditorRef(editorID);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [loading, setLoading] = useState(false);

    const insertLink = async (editor, link) => {
        const type = getPluginType(editor, ELEMENT_LINK);
        const linkNode = getAbove(editor, {
            match: { type },
        });
        const shouldWrap = linkNode !== undefined && isCollapsed(editor.selection);
        upsertLinkAtSelection(editor, { link, wrap: shouldWrap });
    }

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
			<ModalLink
				header="Import Link"
				insert={insertLink}
				isOpen={isOpen}
				onClose={onClose}
			/>
		</>
	);
};



export default ToolbarLink;

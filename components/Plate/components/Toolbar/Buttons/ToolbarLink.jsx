import React, { useEffect, useState } from "react";
import { getPlatePluginType, useStoreEditorRef } from "@udecode/plate-core";
import { useDisclosure } from "@chakra-ui/hooks";
import ToolbarButton from "./ToolbarButton";
import ModalLink from "./ModalLink";
import { ELEMENT_LINK, upsertLinkAtSelection } from "@udecode/plate-link";
import { getAbove, isCollapsed } from "@udecode/plate-common";

const ToolbarLink= ({ children, editorID = "main-editor", ...props }) => {
	const editor = useStoreEditorRef(editorID);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [loading, setLoading] = useState(false);

    const insertLink = async (editor, link) => {
        const type = getPlatePluginType(editor, ELEMENT_LINK);
        const linkNode = getAbove(editor, {
            match: { type },
        });
        const shouldWrap = linkNode !== undefined && isCollapsed(editor.selection);
        upsertLinkAtSelection(editor, { link, wrap: true });
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

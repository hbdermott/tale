import React, { useState } from "react";
import { createPlateComponents, createPlateOptions, Plate } from "@udecode/plate";
import { createHistoryPlugin, createReactPlugin, getPlatePluginType, useEventEditorId, useStoreEditorRef } from "@udecode/plate-core";
import { createParagraphPlugin } from "@udecode/plate-paragraph";
import { createBlockquotePlugin, ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
import { createHeadingPlugin, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3, ELEMENT_H4, ELEMENT_H5, ELEMENT_H6 } from "@udecode/plate-heading";
import {
	createBoldPlugin,
	createCodePlugin,
	createItalicPlugin,
	createStrikethroughPlugin,
	createUnderlinePlugin,
} from "@udecode/plate-basic-marks";
import { createKbdPlugin } from "@udecode/plate-kbd";
import { HeadingToolbar, ToolbarElement } from "@udecode/plate-toolbar";
import { ToolbarCodeBlock } from "@udecode/plate-code-block-ui";
import { ELEMENT_CODE_BLOCK } from "@udecode/plate-code-block";
import { Button } from "@chakra-ui/button";
const PlateEditor = () => {
	const [value, setValue] = useState(null);
	const plugins = [
		createReactPlugin(),
		createHistoryPlugin(),
		createParagraphPlugin(),
		createBlockquotePlugin(),
		createHeadingPlugin(),
		createBoldPlugin(),
		createItalicPlugin(),
		createUnderlinePlugin(),
		createStrikethroughPlugin(),
		createCodePlugin(),
		createKbdPlugin(),
	];
	const editableProps = {
		placeholder: "Type…",
		style: {
			padding: "15px",
		},
	};

  const ToolbarButtonsBasicElements = () => {
    const editor = useStoreEditorRef(useEventEditorId('focus'));

    return (
			<>
				<ToolbarElement
                    as={Button}
					type={getPlatePluginType(editor, ELEMENT_H1)}
					icon={<div>a</div>}
				/>
				<ToolbarElement
					type={getPlatePluginType(editor, ELEMENT_H2)}
					icon={<div>a</div>}
				/>
				<ToolbarElement
					type={getPlatePluginType(editor, ELEMENT_H3)}
					icon={<div>a</div>}
				/>
				<ToolbarElement
					type={getPlatePluginType(editor, ELEMENT_H4)}
					icon={<div>a</div>}
				/>
				<ToolbarElement
					type={getPlatePluginType(editor, ELEMENT_H5)}
					icon={<div>a</div>}
				/>
				<ToolbarElement
					type={getPlatePluginType(editor, ELEMENT_H6)}
					icon={<div>a</div>}

				/>
				<ToolbarElement
					type={getPlatePluginType(editor, ELEMENT_BLOCKQUOTE)}
					icon={<div>a</div>}
				/>
			</>
		);
  };

	return (
		<>
			<HeadingToolbar style={{border: "none"}}>
				<ToolbarButtonsBasicElements />
			</HeadingToolbar>
			<Plate
				editableProps={editableProps}
				onChange={(val) => setValue(val)}
				plugins={plugins}
                components={createPlateComponents()}
                options={createPlateOptions()}
			/>
		</>
	);
}

export default PlateEditor;
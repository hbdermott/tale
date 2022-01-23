import {
	createAlignPlugin,
	createAutoformatPlugin,
	createBlockquotePlugin,
	createBoldPlugin,
	createCodePlugin,
	createDeserializeMdPlugin,
	createExitBreakPlugin,
	createFontColorPlugin,
	createFontFamilyPlugin,
	createFontSizePlugin,
	createFontWeightPlugin,
	createHeadingPlugin,
	createHighlightPlugin,
	createHorizontalRulePlugin,
	createImagePlugin,
	createIndentPlugin,
	createItalicPlugin,
	createLinkPlugin,
	createMediaEmbedPlugin,
	createNodeIdPlugin,
	createParagraphPlugin,
	createPlateUI,
	createPlugins,
	createResetNodePlugin,
	createSelectOnBackspacePlugin,
	createSoftBreakPlugin,
	createStrikethroughPlugin,
	createTrailingBlockPlugin,
	createUnderlinePlugin,
	Plate,
} from "@udecode/plate";
import { CONFIG } from "./config/config";
import { withStyledPlaceHolders } from "./plugins/withStyledPlaceHolders";
import React, { useMemo } from "react";
// import ToolbarBalloons from "./components/Toolbar/Buttons/ToolbarBalloons";

const PlateEditor = ({ readonly = false, value }) => {
	let components = createPlateUI();
	components = withStyledPlaceHolders(components);

	const Editor = () => {
		// const pluginsMemo = useMemo(getPlugins, []);
		const plugins = createPlugins(
			[
				createParagraphPlugin(),
				createBlockquotePlugin(),
				createHeadingPlugin(),
				createImagePlugin(),
				createHorizontalRulePlugin(),
				// createLineHeightPlugin(CONFIG.lineHeight),
				createLinkPlugin(),
				// createListPlugin(),
				createMediaEmbedPlugin(),
				// createCodeBlockPlugin(),
				createAlignPlugin(CONFIG.align),
				createBoldPlugin(),
				createCodePlugin(),
				createItalicPlugin(),
				createHighlightPlugin(),
				createUnderlinePlugin(),
				createStrikethroughPlugin(),
				// createFontBackgroundColorPlugin(),
				createFontFamilyPlugin(),
				createFontColorPlugin(),
				createFontSizePlugin(),
				createFontWeightPlugin(),
				createNodeIdPlugin(),
				createIndentPlugin(CONFIG.indent),
				createAutoformatPlugin(CONFIG.autoformat),
				createResetNodePlugin(CONFIG.resetBlockType),
				createSoftBreakPlugin(CONFIG.softBreak),
				createExitBreakPlugin(CONFIG.exitBreak),
				createTrailingBlockPlugin(CONFIG.trailingBlock),
				createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
				createDeserializeMdPlugin(),
				// createJuicePlugin(),
			],
			{
				components,
			}
		);

		return (
				<Plate
					id="main-editor"
					plugins={plugins}
					initialValue={[
						{
							type: "p",
							children: [{ text: "" }],
						},
					]}
					editableProps={readonly ? CONFIG.readOnly : CONFIG.editableProps}
					value={value}
				>
					{/* {!readonly ? <ToolbarBalloons/> : <></>} */}
				</Plate>
		);
	};

	return <Editor />;
};

export default PlateEditor;

import { createAlignPlugin } from "@udecode/plate-alignment";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import { createBoldPlugin, createCodePlugin, createItalicPlugin, createStrikethroughPlugin, createUnderlinePlugin } from "@udecode/plate-basic-marks";
import { createBlockquotePlugin } from "@udecode/plate-block-quote";
import { createExitBreakPlugin, createSoftBreakPlugin } from "@udecode/plate-break";
import { createHistoryPlugin, createReactPlugin } from "@udecode/plate-core";
import { createDndPlugin } from "@udecode/plate-dnd";
import { createFontBackgroundColorPlugin, createFontColorPlugin, createFontFamilyPlugin, createFontSizePlugin, createFontWeightPlugin } from "@udecode/plate-font";
import { createHeadingPlugin } from "@udecode/plate-heading";
import { createHighlightPlugin } from "@udecode/plate-highlight";
import { createHorizontalRulePlugin } from "@udecode/plate-horizontal-rule";
import { createDeserializeHTMLPlugin } from "@udecode/plate-html-serializer";
import { createImagePlugin } from "@udecode/plate-image";
import { createIndentPlugin } from "@udecode/plate-indent";
import { createLinkPlugin } from "@udecode/plate-link";
import { createDeserializeMDPlugin } from "@udecode/plate-md-serializer";
import { createMediaEmbedPlugin } from "@udecode/plate-media-embed";
import { createNodeIdPlugin } from "@udecode/plate-node-id";
import { createParagraphPlugin } from "@udecode/plate-paragraph";
import { createResetNodePlugin } from "@udecode/plate-reset-node";
import { createSelectOnBackspacePlugin } from "@udecode/plate-select";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
import { CONFIG } from "./config";


const getCorePlugins = () => {
    return [createReactPlugin(), createHistoryPlugin()]
}
const getElementPlugins = () => {
    return [
			createParagraphPlugin(),
			createBlockquotePlugin(),
			createHeadingPlugin(),
			createHorizontalRulePlugin(),
			createLinkPlugin(),
			createImagePlugin(),
			createMediaEmbedPlugin(),
		];
}
const getMarkPlugins = () => {
    return [
			createBoldPlugin(),
			createCodePlugin(),
			createItalicPlugin(),
			createHighlightPlugin(),
			createUnderlinePlugin(),
			createStrikethroughPlugin(),
			createFontColorPlugin(),
			createFontBackgroundColorPlugin(),
		];
}
export const getNodePlugins = () => {
    return [
        ...getCorePlugins(),
        ...getElementPlugins(),
        ...getMarkPlugins(),
    ]
}
export const getPlugins = () => {
			const plugins = [
				...getNodePlugins(),
				createAlignPlugin(CONFIG.align),
				createFontFamilyPlugin(),
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
				createDndPlugin(),
			];

			plugins.push(
				...[
					createDeserializeMDPlugin({ plugins }),
					createDeserializeHTMLPlugin({ plugins }),
				]
			);

			return plugins;
        }
import { createPlateComponents, createPlateOptions } from "@udecode/plate";
import { createAlignPlugin } from "@udecode/plate-alignment";
import { createDeserializeAstPlugin } from "@udecode/plate-ast-serializer";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import { createBoldPlugin, createCodePlugin, createItalicPlugin, createStrikethroughPlugin, createSubscriptPlugin, createSuperscriptPlugin, createUnderlinePlugin } from "@udecode/plate-basic-marks";
import { createBlockquotePlugin } from "@udecode/plate-block-quote";
import { createExitBreakPlugin, createSoftBreakPlugin } from "@udecode/plate-break";
import { createCodeBlockPlugin } from "@udecode/plate-code-block";
import { createComboboxPlugin } from "@udecode/plate-combobox";
import { createHistoryPlugin, createReactPlugin, Plate } from "@udecode/plate-core";
import { createDeserializeCSVPlugin } from "@udecode/plate-csv-serializer";
import { createFontBackgroundColorPlugin, createFontColorPlugin, createFontFamilyPlugin, createFontSizePlugin, createFontWeightPlugin, MARK_BG_COLOR, MARK_COLOR } from "@udecode/plate-font";
import { createHeadingPlugin } from "@udecode/plate-heading";
import { createHighlightPlugin } from "@udecode/plate-highlight";
import { createHorizontalRulePlugin } from "@udecode/plate-horizontal-rule";
import { createDeserializeHTMLPlugin } from "@udecode/plate-html-serializer";
import { createImagePlugin } from "@udecode/plate-image";
import { createIndentPlugin } from "@udecode/plate-indent";
import { createKbdPlugin } from "@udecode/plate-kbd";
import { createLineHeightPlugin } from "@udecode/plate-line-height";
import { createLinkPlugin } from "@udecode/plate-link";
import { createListPlugin, createTodoListPlugin } from "@udecode/plate-list";
import { createDeserializeMDPlugin } from "@udecode/plate-md-serializer";
import { createMediaEmbedPlugin } from "@udecode/plate-media-embed";
import { createMentionPlugin } from "@udecode/plate-mention";
import { createNodeIdPlugin } from "@udecode/plate-node-id";
// import { createNormalizeTypesPlugin } from "@udecode/plate-normalizers";
import { createParagraphPlugin } from "@udecode/plate-paragraph";
import { createResetNodePlugin } from "@udecode/plate-reset-node";
import { createSelectOnBackspacePlugin } from "@udecode/plate-select";
import { createTablePlugin } from "@udecode/plate-table";
import { HeadingToolbar } from "@udecode/plate-toolbar";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
import { BallonToolbarMarks, ToolbarButtonsAlign, ToolbarButtonsBasicElements, ToolbarButtonsBasicMarks, ToolbarButtonsIndent, ToolbarButtonsList, ToolbarButtonsTable } from "./Toolbars";
import { ToolbarColorPicker } from "@udecode/plate-font-ui";
import { FontDownload, FormatColorText, LineWeight, OndemandVideo } from "@styled-icons/material";
import { Link } from "@styled-icons/bootstrap";
import { Image } from "@styled-icons/boxicons-solid";
import { CONFIG } from "./config";
import { withStyledPlaceHolders } from "./withStyledPlaceHolders";
import { useMemo } from "react";
import { Box, Divider } from "@chakra-ui/layout";
import LinkButton from "./ToolbarButtons/LinkButton";
import MediaButton from "./ToolbarButtons/MediaButton";
import ImageButton from "./ToolbarButtons/ImageButton";
const PlateEditor = () => {
	let components = createPlateComponents({
		...CONFIG.components
	});
	components = withStyledPlaceHolders(components);

	const options = createPlateOptions();

	const Editor = () => {

		const pluginsMemo = useMemo(() => {
			const plugins = [
				createReactPlugin(),
				createHistoryPlugin(),
				createParagraphPlugin(),
				createBlockquotePlugin(),
				createTodoListPlugin(),
				createHeadingPlugin(),
				createImagePlugin(),
				createHorizontalRulePlugin(),
				createLineHeightPlugin(CONFIG.lineHeight),
				createLinkPlugin(),
				createListPlugin(),
				createTablePlugin(),
				createMediaEmbedPlugin(),
				// createCodeBlockPlugin(),
				createAlignPlugin(CONFIG.align),
				createBoldPlugin(),
				createCodePlugin(),
				createItalicPlugin(),
				createHighlightPlugin(),
				createUnderlinePlugin(),
				createStrikethroughPlugin(),
				createSubscriptPlugin(),
				createSuperscriptPlugin(),
				// createFontBackgroundColorPlugin(),
				createFontFamilyPlugin(),
				// createFontColorPlugin(),
				createFontSizePlugin(),
				createFontWeightPlugin(),
				createKbdPlugin(),
				createNodeIdPlugin(),
				createIndentPlugin(CONFIG.indent),
				createAutoformatPlugin(CONFIG.autoformat),
				createResetNodePlugin(CONFIG.resetBlockType),
				createSoftBreakPlugin(CONFIG.softBreak),
				createExitBreakPlugin(CONFIG.exitBreak),
				// createNormalizeTypesPlugin(),
				createTrailingBlockPlugin(CONFIG.trailingBlock),
				createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
				createComboboxPlugin(),
				createMentionPlugin(),
			];

			plugins.push(
				...[
					createDeserializeMDPlugin({ plugins }),
					createDeserializeCSVPlugin({ plugins }),
					createDeserializeHTMLPlugin({ plugins }),
					createDeserializeAstPlugin({ plugins }),
				]
			);

			return plugins;
		}, [options]);

		return (
			<Box width="1200px" borderRadius="20px">
				<HeadingToolbar className="toolbar">
					<ToolbarButtonsBasicElements />
					<ToolbarButtonsList />
					<ToolbarButtonsIndent />
					<ToolbarButtonsBasicMarks />
					{/* <ToolbarColorPicker
						pluginKey={MARK_COLOR}
						icon={<FormatColorText />}
					/>
					<ToolbarColorPicker
						pluginKey={MARK_BG_COLOR}
						icon={<FontDownload />}
					/> */}
					<ToolbarButtonsAlign />
					{/* <ToolbarLineHeight icon={<LineWeight />} /> */}
					<LinkButton icon={<Link />} />
					<ImageButton icon={<Image />} />
					<MediaButton icon={<OndemandVideo />} />
					<ToolbarButtonsTable />
				</HeadingToolbar>
				<Divider />
				<Plate
					// id="playground"
					plugins={pluginsMemo}
					components={components}
					options={options}
					editableProps={CONFIG.editableProps}
				>
					<BallonToolbarMarks />
				</Plate>
			</Box>
		);
	};

	return <Editor />;
};

export default PlateEditor;
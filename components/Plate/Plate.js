import { createPlateComponents, createPlateOptions } from "@udecode/plate";
import { createAlignPlugin } from "@udecode/plate-alignment";
import { createDeserializeAstPlugin } from "@udecode/plate-ast-serializer";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import { createBoldPlugin, createCodePlugin, createItalicPlugin, createStrikethroughPlugin, createSubscriptPlugin, createSuperscriptPlugin, createUnderlinePlugin } from "@udecode/plate-basic-marks";
import { createBlockquotePlugin } from "@udecode/plate-block-quote";
import { createExitBreakPlugin, createSoftBreakPlugin } from "@udecode/plate-break";
import { createComboboxPlugin } from "@udecode/plate-combobox";
import { createHistoryPlugin, createReactPlugin, Plate} from "@udecode/plate-core";
import { createDeserializeCSVPlugin } from "@udecode/plate-csv-serializer";
import { createFontFamilyPlugin, createFontSizePlugin, createFontWeightPlugin} from "@udecode/plate-font";
import { createHeadingPlugin } from "@udecode/plate-heading";
import { createHighlightPlugin } from "@udecode/plate-highlight";
import { createHorizontalRulePlugin } from "@udecode/plate-horizontal-rule";
import { createDeserializeHTMLPlugin } from "@udecode/plate-html-serializer";
import { createImagePlugin } from "@udecode/plate-image";
import { createIndentPlugin } from "@udecode/plate-indent";
import { createKbdPlugin } from "@udecode/plate-kbd";
import { createLinkPlugin } from "@udecode/plate-link";
import { createListPlugin, createTodoListPlugin } from "@udecode/plate-list";
import { createDeserializeMDPlugin } from "@udecode/plate-md-serializer";
import { createMediaEmbedPlugin } from "@udecode/plate-media-embed";
import { createNodeIdPlugin } from "@udecode/plate-node-id";
import { createParagraphPlugin } from "@udecode/plate-paragraph";
import { createResetNodePlugin } from "@udecode/plate-reset-node";
import { createSelectOnBackspacePlugin } from "@udecode/plate-select";
import { createTablePlugin } from "@udecode/plate-table";
import { HeadingToolbar } from "@udecode/plate-toolbar";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
import { OndemandVideo } from "@styled-icons/material";
import { Link } from "@styled-icons/bootstrap";
import { Image } from "@styled-icons/boxicons-solid";
import { CONFIG } from "./config";
import { withStyledPlaceHolders } from "./withStyledPlaceHolders";
import { useMemo } from "react";
import { Box, Divider } from "@chakra-ui/layout";
import LinkButton from "./ToolbarButtons/LinkButton";
import MediaButton from "./ToolbarButtons/MediaButton";
import ImageButton from "./ToolbarButtons/ImageButton";
import ToolbarHeaders from "./ToolbarGroups/ToolbarHeaders"
import ToolbarLists from "./ToolbarGroups/ToolbarLists";
import ToolbarIndents from "./ToolbarGroups/ToolbarIndents";
import ToolbarMarks from './ToolbarGroups/ToolbarMarks'
import ToolbarAligns from "./ToolbarGroups/ToolbarAligns";
import ToolbarTables from "./ToolbarGroups/ToolbarTables";
import ToolbarBalloons from "./ToolbarGroups/ToolbarBalloons";
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
				createLinkPlugin(),
				createListPlugin(),
				createTablePlugin(),
				createMediaEmbedPlugin(),
				createAlignPlugin(CONFIG.align),
				createBoldPlugin(),
				createCodePlugin(),
				createItalicPlugin(),
				createHighlightPlugin(),
				createUnderlinePlugin(),
				createStrikethroughPlugin(),
				createSubscriptPlugin(),
				createSuperscriptPlugin(),
				createFontFamilyPlugin(),
				createFontSizePlugin(),
				createFontWeightPlugin(),
				createKbdPlugin(),
				createNodeIdPlugin(),
				createIndentPlugin(CONFIG.indent),
				createAutoformatPlugin(CONFIG.autoformat),
				createResetNodePlugin(CONFIG.resetBlockType),
				createSoftBreakPlugin(CONFIG.softBreak),
				createExitBreakPlugin(CONFIG.exitBreak),
				createTrailingBlockPlugin(CONFIG.trailingBlock),
				createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
				createComboboxPlugin(),
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
		}, []);


		return (
			<Box width="1200px" pb={20} pt={10}>
				<Divider />
				<Plate
					id="focus"
					plugins={pluginsMemo}
					components={components}
					options={options}
					editableProps={CONFIG.editableProps}
				>
					<ToolbarBalloons />
				</Plate>
				<HeadingToolbar className="toolbar">
					<ToolbarLists />
					<ToolbarIndents />
					<ToolbarMarks />
					<ToolbarAligns />
					<ToolbarTables />
					<ToolbarHeaders />
					<LinkButton icon={<Link />} />
					<ImageButton icon={<Image />} />
					<MediaButton icon={<OndemandVideo />} />
				</HeadingToolbar>
			</Box>
		);
	};

	return <Editor />;
};

export default PlateEditor;
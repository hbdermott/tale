import { createPlateComponents, createPlateOptions, selectEditor } from "@udecode/plate";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
import { HeadingToolbar } from "@udecode/plate-toolbar";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
import { Link, VideoAdd, ImageAdd } from "@styled-icons/fluentui-system-filled";
import { CONFIG } from "./config";
import { withStyledPlaceHolders } from "./withStyledPlaceHolders";
import { useMemo } from "react";
import { Box, Center } from "@chakra-ui/layout";
import ToolbarHeaders from "./components/Toolbar/ButtonGroups/Full/ToolbarHeaders"
import ToolbarLists from "./components/Toolbar/ButtonGroups/Full/ToolbarLists";
import ToolbarIndents from "./components/Toolbar/ButtonGroups/Full/ToolbarIndents";
import ToolbarMarks from './components/Toolbar/ButtonGroups/Full/ToolbarMarks'
import ToolbarAligns from "./components/Toolbar/ButtonGroups/Full/ToolbarAligns";
import ToolbarBalloons from "./components/Toolbar/ButtonGroups/Full/ToolbarBalloons";
import ToolbarHeaderMenu from "./components/Toolbar/ButtonGroups/Compact/ToolbarHeaderMenu";
import ToolbarImage from "./components/Toolbar/Buttons/ToolbarImage";
import ToolbarMedia from "./components/Toolbar/Buttons/ToolbarMedia";
import ToolbarLink from "./components/Toolbar/Buttons/ToolbarLink";
import { createEditor } from "slate";
import { createDndPlugin } from "@udecode/plate-dnd";
import { withStyledDraggables } from "./withStyledDraggables";


const PlateEditor = () => {
	let components = createPlateComponents({
		...CONFIG.components
	});
	components = withStyledPlaceHolders(components);
	components = withStyledDraggables(components);
	const options = createPlateOptions();

	const Editor = () => {
		const slateEditor = createEditor()
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
				createDndPlugin(),
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
			<Box
				width="1200px"
				h="100%"
				borderX="1px solid gray"
				borderTop="1px solid gray"
				borderTopRadius={20}
				className="editor-container"
				mt={10}
				pb={20}
				pt={10}
				px={10}
				overflow="auto"
				onClick={() => selectEditor(slateEditor, { focus: true })}
			>
				<DndProvider backend={HTML5Backend}>
					<Plate
						id="main-editor"
						plugins={pluginsMemo}
						editor={slateEditor}
						components={components}
						options={options}
						editableProps={CONFIG.editableProps}
					>
						<ToolbarBalloons />
					</Plate>
					<Center>
						<HeadingToolbar className="toolbar">
							<ToolbarHeaderMenu />
							<ToolbarLists />
							<ToolbarIndents />
							<ToolbarMarks />
							<ToolbarAligns />
							<ToolbarHeaders />
							<ToolbarLink icon={<Link />} />
							<ToolbarImage icon={<ImageAdd />} />
							<ToolbarMedia icon={<VideoAdd />} />
						</HeadingToolbar>
					</Center>
				</DndProvider>
			</Box>
		);
	};

	return <Editor />;
};

export default PlateEditor;
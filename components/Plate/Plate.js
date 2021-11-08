import { createPlateComponents, createPlateOptions, selectEditor } from "@udecode/plate";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { createAlignPlugin } from "@udecode/plate-alignment";
import { createDeserializeAstPlugin } from "@udecode/plate-ast-serializer";
import { createAutoformatPlugin } from "@udecode/plate-autoformat";
import { createBoldPlugin, createCodePlugin, createItalicPlugin, createStrikethroughPlugin, createSubscriptPlugin, createSuperscriptPlugin, createUnderlinePlugin } from "@udecode/plate-basic-marks";
import { createBlockquotePlugin } from "@udecode/plate-block-quote";
import { createExitBreakPlugin, createSoftBreakPlugin } from "@udecode/plate-break";
import { createHistoryPlugin, createReactPlugin, Plate} from "@udecode/plate-core";
import { createDeserializeCSVPlugin } from "@udecode/plate-csv-serializer";
import { createFontBackgroundColorPlugin, createFontColorPlugin, createFontFamilyPlugin, createFontSizePlugin, createFontWeightPlugin, MARK_BG_COLOR, MARK_COLOR} from "@udecode/plate-font";
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
import { HeadingToolbar } from "@udecode/plate-toolbar";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
import { Link, VideoAdd, ImageAdd } from "@styled-icons/fluentui-system-filled";
import { CONFIG } from "./config";
import { withStyledPlaceHolders } from "./withStyledPlaceHolders";
import { useMemo } from "react";
import { Box, Center, Flex } from "@chakra-ui/layout";
import ToolbarHeaders from "./components/Toolbar/ButtonGroups/Full/ToolbarHeaders"
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
// import { withStyledDraggables } from "./withStyledDraggables";
import ToolbarImportCompact from "./components/Toolbar/ButtonGroups/Compact/ToolbarImportCompact";
import ToolbarLayoutCompact from "./components/Toolbar/ButtonGroups/Compact/ToolbarLayoutCompact";
import ToolbarMarkupCompact from "./components/Toolbar/ButtonGroups/Compact/ToolbarMarkupCompact";
import ToolbarColorPicker from "./components/Toolbar/Buttons/ToolbarColorPicker";
import ToolbarHighlight from "./components/Toolbar/ButtonGroups/Full/ToolbarHighlight";
import ToolbarBlockquote from "./components/Toolbar/ButtonGroups/Full/ToolbarBlockquote";
import ToolbarContainer from "./components/Toolbar/ToolbarContainer";
import EditorContainer from "./components/EditorContainer";

const PlateEditor = () => {
	let components = createPlateComponents({
		...CONFIG.components,
	});
	components = withStyledPlaceHolders(components);
	// components = withStyledDraggables(components);
	const options = createPlateOptions();

	const Editor = () => {
		const slateEditor = createEditor()
		const pluginsMemo = useMemo(() => {
			const plugins = [
				createReactPlugin(),
				createHistoryPlugin(),
				createParagraphPlugin(),
				createBlockquotePlugin(),
				createHeadingPlugin(),
				createImagePlugin(),
				createHorizontalRulePlugin(),
				createLinkPlugin(),
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
				createFontColorPlugin(),
				createFontBackgroundColorPlugin(),
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
					createDeserializeCSVPlugin({ plugins }),
					createDeserializeHTMLPlugin({ plugins }),
					createDeserializeAstPlugin({ plugins }),
				]
			);

			return plugins;
		}, []);


		return (
			<Flex w="100%" h="100%" flexDir="column" justify={{base: "space-between", lg: "space-around"}} align="center">
				<EditorContainer>
					<DndProvider backend={HTML5Backend}>
						<Plate
							id="main-editor"
							plugins={pluginsMemo}
							editor={slateEditor}
							components={components}
							options={options}
							initialValue={[
								{
									type: "p",
									children: [{ text: "" }],
								},
							]}
							editableProps={CONFIG.editableProps}
						>
							<ToolbarBalloons />
						</Plate>
					</DndProvider>
				</EditorContainer>
			<ToolbarContainer>
					<ToolbarMarkupCompact />
					<ToolbarHeaderMenu />
					<ToolbarLayoutCompact />
					{/* <ToolbarIndents /> */}
					{/* <ToolbarMarks /> */}
					<ToolbarColorPicker isDisabled={true} pluginKey={MARK_COLOR} />
					<ToolbarColorPicker isDisabled={true} pluginKey={MARK_BG_COLOR} />
					<ToolbarImportCompact />
				</ToolbarContainer>
			</Flex>
		);
	};

	return <Editor />;
};

export default PlateEditor;
import { createPlateComponents, createPlateOptions, selectEditor } from "@udecode/plate";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {Plate} from "@udecode/plate-core";
import { CONFIG } from "./config/config";
import { withStyledPlaceHolders } from "./plugins/withStyledPlaceHolders";
import React, { useMemo } from "react";
import ToolbarBalloons from "./components/Toolbar/ButtonGroups/Full/ToolbarBalloons";
import { createEditor } from "slate";
import {getPlugins} from "./config/plugins";
import { Editable } from "@chakra-ui/editable";

const PlateEditor = ({readonly = false, value}) => {
	let components = createPlateComponents({
		...CONFIG.components,
	});
	components = withStyledPlaceHolders(components);
	// components = withStyledDraggables(components);
	const options = createPlateOptions();

	const Editor = () => {
		const slateEditor = createEditor()
		const pluginsMemo = useMemo(getPlugins, []);


		return (
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
							editableProps={readonly ? CONFIG.readOnly : CONFIG.editableProps}
							value={value}
						>
							{/* {!readonly && <ToolbarBalloons />} */}
							<Editable />
						</Plate>
					</DndProvider>
		);
	};

	return <Editor />;
};

export default PlateEditor;
import ToolbarHeaderMenu from "./ButtonGroups/Compact/ToolbarHeaderMenu";
import ToolbarImportCompact from "./ButtonGroups/Compact/ToolbarImportCompact";
import ToolbarLayoutCompact from "./ButtonGroups/Compact/ToolbarLayoutCompact";
import ToolbarMarkupCompact from "./ButtonGroups/Compact/ToolbarMarkupCompact";
// import ToolbarColorPicker from "./Toolbar/Buttons/ToolbarColorPicker";
import ToolbarContainer from "./ToolbarContainer";
const Toolbar = () => {
	return (
		<ToolbarContainer>
			<ToolbarMarkupCompact />
			<ToolbarHeaderMenu />
			<ToolbarLayoutCompact />
			{/* <ToolbarIndents /> */}
			{/* <ToolbarMarks /> */}
			{/* <ToolbarColorPicker isDisabled={true} pluginKey={MARK_COLOR} />
			<ToolbarColorPicker isDisabled={true} pluginKey={MARK_BG_COLOR} /> */}
			<ToolbarImportCompact />
		</ToolbarContainer>
	);
};

export default Toolbar;

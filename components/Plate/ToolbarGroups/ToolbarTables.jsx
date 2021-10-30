import { BorderLeft, BorderRight, BorderTop, BorderBottom, BorderAll, Border} from "@styled-icons/fluentui-system-filled";
import { addColumn, addRow, deleteColumn, deleteRow, deleteTable, insertTable } from "@udecode/plate";
import { ToolbarTable } from "@udecode/plate-table-ui";

const ToolbarTables = () => (
	<>
                <ToolbarTable icon={<BorderAll />} transform={insertTable} />
                <ToolbarTable icon={<Border />} transform={deleteTable} />
                <ToolbarTable icon={<BorderBottom />} transform={addRow} />
                <ToolbarTable icon={<BorderTop />} transform={deleteRow} />
                <ToolbarTable icon={<BorderLeft />} transform={addColumn} />
                <ToolbarTable icon={<BorderRight />} transform={deleteColumn} />	
	</>
);

export default ToolbarTables;
import { MARK_COLOR } from "@udecode/plate";
import { getRenderLeaf } from "@udecode/plate-core";
import { getFontColorDeserialize } from "@udecode/plate-font";
export const createColorPlugin = () => ({
	pluginKeys: MARK_COLOR,
	renderLeaf: getRenderLeaf(MARK_COLOR),
	deserialize: getFontColorDeserialize(),
	// onKeyDown: getToggleMarkOnKeyDown(MARK_COLOR),
});

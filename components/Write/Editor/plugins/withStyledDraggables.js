import React from "react";
import { Drag } from "@styled-icons/fluentui-system-filled";
import Tippy from "@tippyjs/react";
import { css } from "styled-components";
// import tw from "twin.macro";
import { DragControls } from "framer-motion";
import { grabberTooltipProps, withDraggables } from "@udecode/plate-dnd";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { ELEMENT_H1, ELEMENT_H2, ELEMENT_H3 } from "@udecode/plate-heading";
import { ELEMENT_MEDIA_EMBED } from "@udecode/plate-media-embed";

export const withStyledDraggables = (components) => {
	return withDraggables(components, [
		{
			keys: [ELEMENT_PARAGRAPH],
			level: 0,
		},
		{
			keys: [
				ELEMENT_PARAGRAPH,
				ELEMENT_BLOCKQUOTE,
				ELEMENT_H1,
				ELEMENT_H2,
				ELEMENT_H3,
				ELEMENT_IMAGE,
				ELEMENT_MEDIA_EMBED,
			],
			onRenderDragHandle: ({ styles, ...props }) => (
				<Tippy {...grabberTooltipProps}>
					<button type="button" {...props} css={styles}>
						<Drag
							style={{
								width: 18,
								height: 18,
								color: "rgba(55, 53, 47, 0.3)",
							}}
						/>
					</button>
				</Tippy>
			),
		},
		{
			key: ELEMENT_H1,
			styles: {
				gutterLeft: css`
					padding: 2em 0 4px;
					font-size: 1.875em;
				`,
				// blockToolbarWrapper: tw`height[1.3em]`,
			},
		},
		{
			key: ELEMENT_H2,
			styles: {
				gutterLeft: css`
					padding: 1.4em 0 1px;
					font-size: 1.5em;
				`,
				// blockToolbarWrapper: tw`height[1.3em]`,
			},
		},
		{
			key: ELEMENT_H3,
			styles: {
				gutterLeft: css`
					padding: 1em 0 1px;
					font-size: 1.25em;
				`,
				// blockToolbarWrapper: tw`height[1.3em]`,
			},
		},
		{
			keys: [ELEMENT_PARAGRAPH],
			styles: {
				// gutterLeft: tw`pt-1`,
			},
		},
		{
			key: ELEMENT_BLOCKQUOTE,
			styles: {
				// gutterLeft: tw`paddingTop[18px]`,
			},
		},
	]);
};
import { ELEMENT_BLOCKQUOTE } from "@udecode/plate-block-quote";
import { ELEMENT_H1 } from "@udecode/plate-heading";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { withPlaceholders } from "@udecode/plate-placeholder";


export const withStyledPlaceHolders = (components) =>
	withPlaceholders(components, [
		{
			key: ELEMENT_PARAGRAPH,
			placeholder: "A new paragraph...",
			hideOnBlur: true,
		},
		{
			key: ELEMENT_H1,
			placeholder: "A bold title...",
			hideOnBlur: false,
		},
		{
			key: ELEMENT_BLOCKQUOTE,
			placeholder: "A nice quote...",
			hideOnBlur: false,
		},
	]);

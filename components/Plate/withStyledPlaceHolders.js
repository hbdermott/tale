import {
	ELEMENT_H1,
	ELEMENT_PARAGRAPH,
	ELEMENT_BLOCKQUOTE,
	ELEMENT_DEFAULT,
	withPlaceholders,
} from "@udecode/plate";

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

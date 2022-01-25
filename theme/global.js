export const global = (props) => ({
	".ProseMirror": {
		"h1, h2, h3": {
			fontWeight: "bold",
		},
		h1: {
			fontSize: "4xl",
		},
		h2: {
			fontSize: "3xl",
		},
		h3: {
			fontSize: "2xl",
		},
		blockquote: {
			borderColor: "gray.300",
			fontWeight: "light",
			py: "3",
			ml: "5",
			px: "2",
			color: props.colorMode === "dark" ? "gray.400" : "gray.500",
			borderLeft: "2px",
		},
		hr: {
			borderColor: props.colorMode === "dark" ? "gray.300" : "gray.500",
			borderTopWidth: "2px",
			rounded: "3xl",
			// mx: "3",
		},
		a: {
			cursor: "pointer",
			textDecoration: "underline",
			color: props.colorMode === "dark" ? "gray.400" : "gray.500",
			// fontStyle: "italic",
		},
	},
	".ProseMirror-focused": {
		outline: "none",
	},
});
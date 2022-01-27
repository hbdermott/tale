export const global = (props) => ({
	// "div:has(.ProseMirror)": {
	// 	h: "100%",
	// },
	".editor-container::-webkit-scrollbar-track": {
		"-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.3)",
		rounded: "10px",
		bg: "#FFFFFF00",
	},

	".editor-container::-webkit-scrollbar": {
		w: "12px",
		bg: "#FFFFFF00",
	},

	".editor-container::-webkit-scrollbar-thumb": {
		rounded: "10px",
		"-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,.3)",
		bg: props.colorMode === "dark" ? "gray.700" : "#33333333",
	},
	".ProseMirror": {
		h: "95%",
		px: "10",
		py: "10",
		// overflow: "none",
		p: {
			fontSize: "2xl",
		},
		"h1, h2, h3": {
			fontWeight: "bold",
		},
		h1: {
			fontSize: "5xl",
		},
		h2: {
			fontSize: "4xl",
		},
		h3: {
			fontSize: "3xl",
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
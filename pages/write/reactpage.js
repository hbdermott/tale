import React, { useState } from "react";

import Editor from "@react-page/editor";

// import the main css, uncomment this: (this is commented in the example because of https://github.com/vercel/next.js/issues/19717)
// import '@react-page/editor/lib/index.css';

// The rich text area plugin
import slate from "@react-page/plugins-slate";
// image
import image from "@react-page/plugins-image";

import '@react-page/plugins-slate/lib/index.css';
import '@react-page/plugins-image/lib/index.css';
import "@react-page/editor/lib/index.css";
const cellPlugins = [slate(), image];

export default function SimpleExample() {
	const [value, setValue] = useState(null);

	return (
			<Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
	);
}

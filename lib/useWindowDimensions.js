import { useState, useEffect } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		{width: "100%", height: "100vh"}
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

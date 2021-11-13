import { useMediaQuery } from "@chakra-ui/media-query";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NavbarCompact from "./Navbar/Compact";

export default function Layout({ children }) {
	return (
		<>
			 <Navbar position="sticky" top={0} />
			<main style={{ zIndex: -1 }}>{children}</main>
		</>
	);
}
 
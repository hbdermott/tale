import Navbar from "./Navbar";

export default function Layout({ children }) {
	return (
		<>
			 <Navbar sticky/>
			<main>{children}</main>
		</>
	);
}
 
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";
import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Tab, TabList, Tabs } from "@chakra-ui/tabs";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";  
import { useEffect, useState } from "react";
const PageLinks = () => {
    const router = useRouter();
	const [active, setActive] = useState(
		router.pathname.includes("write") ? 1 : 0
	);
	useEffect(() =>{
		router.pathname.includes('write') ? setActive(1) : setActive(0)

	}, [router.pathname])
    return (
			<Tabs isLazy={true} pl={3} size="lg" defaultIndex={active}>
				<TabList>
					<Tab p={0} w="50%">
							<Link href="/read">
								<Text p={5}>Read</Text>
							</Link>
					</Tab>
					<Tab p={0} w="50%">
						<Link href="/write">
							<Text p={5}>Write</Text>
						</Link>
					</Tab>
				</TabList>
			</Tabs>
		);

}

export default PageLinks

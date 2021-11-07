import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/breadcrumb";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";  
const PageLinks = () => {
    const router = useRouter();

    return (
			<Breadcrumb>
				<BreadcrumbItem>
					<BreadcrumbLink as={Link} href="/">
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink as={Link} href="/write">
						Write
					</BreadcrumbLink>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<BreadcrumbLink as={Link} href="#">
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
			</Breadcrumb>
		);
}

export default PageLinks

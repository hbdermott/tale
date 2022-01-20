import { Button } from '@chakra-ui/button';
import Link from "next/link"
const MenuButton = ({href, children, ...rest}) => {
    return (
			<Link href={href}>
				<Button
                    bgColor="inherit"
					w="100%"
					borderRadius={0}
					{...rest}
				 >
					{children}
				</Button>
			</Link>
		);
}

export default MenuButton;

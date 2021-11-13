import { IconButton } from "@chakra-ui/button"
import { Github } from "@styled-icons/fa-brands"
import Link from "next/link";  
const GithubButton = (props) => {
    return (
			<Link href="https://github.com/hbdermott/novel" passHref={true}>
            	<IconButton aria-label="Github repo" icon={<Github style={{width: "24px"}}/>} {...props} />
			</Link>
		);
}

export default GithubButton;

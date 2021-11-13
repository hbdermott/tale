import Link from "next/link"
import Image from "next/image";
import Logo from "../../../../public/Logo.png"
import { LinkBox } from "@chakra-ui/layout";
const LogoButton = (props) => {
    return (
        <LinkBox href="/" passHref>
            <Image priority layout="fixed" width="64px" height="32px" src={Logo} />
        </LinkBox>
    )
}

export default LogoButton

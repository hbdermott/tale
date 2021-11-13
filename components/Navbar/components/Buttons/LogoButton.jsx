import Link from "next/link"
import Image from "next/image";
import Logo from "../../../../public/Logo.png"
const LogoButton = (props) => {
    return (
        <Link href="/">
            <Image priority layout="fixed" width="64px" height="32px" src={Logo} />
        </Link>
    )
}

export default LogoButton

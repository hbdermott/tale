import { Button } from "@chakra-ui/button";
import { useAuth } from "../context/User";

const Logout = () => {
    const {logout} = useAuth()
    return(
        <Button onClick={() => logout()}>Logout</Button>
    )
}

export default Logout;
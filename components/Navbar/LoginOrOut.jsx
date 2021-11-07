import { Button } from "@chakra-ui/button"
import { useEffect, useState } from "react"
import { useAuth } from "../../context/User"

const LoginOrOut = (props) => {
    const {user, loading, logout,...rest} = useAuth()
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
        if(user && !loading){
            setLoggedIn(true);
        }
        else if(!user && !loading){
            setLoggedIn(false);
        }
    }, [user, loading])

    return (
        <Button onClick={() => loggedIn ? logout() : login()}>{loggedIn ? "Logout" : "Login"}</Button>
    )
}

export default LoginOrOut

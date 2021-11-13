import { Button } from "@chakra-ui/button"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { useAuth } from "../../../../context/User"

const LoginOrOut = (props) => {
    const {user, loading, logout} = useAuth()
    const router = useRouter();
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
        <Button size="lg" onClick={() => loggedIn ? logout() : router.push('/login')}>{loggedIn ? "Logout" : "Login"}</Button>
    )
}

export default LoginOrOut

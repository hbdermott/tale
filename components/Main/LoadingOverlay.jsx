import { Box, Flex } from "@chakra-ui/layout"
import { Spinner } from "@chakra-ui/react"
import { useAuth } from "../../context/User";

const LoadingOverlay = () => {
    const {loading} = useAuth();
    return (
        <>
        {loading &&
        <Flex w="100%" h="100vh">
            <Spinner size="lg"/>
        </Flex>
         }
         </>
    )
}

export default LoadingOverlay;

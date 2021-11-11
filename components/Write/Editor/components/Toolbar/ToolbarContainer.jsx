import { Center, Flex } from "@chakra-ui/layout"

const ToolbarContainer = ({children, ...rest}) => {
    return (
				<Flex
					p={3}
					justify="space-around"
					borderRadius={{base: 0, lg: 6, md: 6}}
					zIndex={100}
					backgroundColor="#33333333"
					w={{base: "100%", lg: "80%", xl: "50%", "2xl":"40%"}}
					backdropFilter="blur(5px)"
                    {...rest}
				>
					{children}
				</Flex>
		);
}

export default ToolbarContainer

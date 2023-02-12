import { Heading,Box,Badge,Text,Flex,Link,Button ,Stack} from "@chakra-ui/react"
import React from 'react'


export default function Quarters() {
  return (
    <Flex direction={{base:"column",md:"column",lg:"row"}} display={"flex"} justifyContent="space-around" mt="40px" color={"black"}>
        <Box padding={"80px"}>
            <Heading>Quarter 1</Heading>
            <Text>Object-Oriented <br/>Programming using TypeScript</Text><br/>
            <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter1"}>Study Material</Button>
        </Box>
        <Box padding="80px" >
            <Heading>Quarter 2</Heading>
            <Text> Next.js 13, cloud Apps <br/> API's</Text><br/>
            <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter2"}>Study Material</Button>
        </Box>
        <Box bg="light-gray" padding="40px" mt={"35px"}>
            <Heading>Quarter 3</Heading>
            <Text>Dollar Making Bootcamp<br/>Full-Stack Template and API Product Development</Text><br/>
            <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter3"}>Study Material</Button>
        </Box>
    </Flex>
  )
}

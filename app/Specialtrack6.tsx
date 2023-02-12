import { Heading,Box,Badge,Flex,Text,Link,Button ,Stack} from "@chakra-ui/react"
import React from 'react'

export default function Specialtrack6() {
  return (
    <Box>
      <Heading mt='20px'>Network Programmability and Automation Specialization</Heading>
      <Flex direction={{base:"column",md:"column",lg:"row"}} display={"flex"} justifyContent="space-around" mt="20px">
        
        <Box >
            <Box padding="60px">
                <Heading>Quarter 4</Heading>
                <Text>CCNA 200-301 Certification</Text>
                <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter4f"}>Study Material</Button>
            </Box>
            <Box padding="60px">
                <Heading>Quarter 5</Heading>
                <Text>Network Programmability and<br/> Automation</Text>
                <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter5f"}>Study Material</Button>
            </Box>
        </Box>
      </Flex>
    </Box>
  )
}

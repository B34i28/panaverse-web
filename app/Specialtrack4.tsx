import { Heading,Box,Badge,Text,Link,Flex,Button ,Stack} from "@chakra-ui/react"
import React from 'react'

export default function Specialtrack4() {
  return (
    <Box>
      <Heading mt='20px'>Ambient Computing and IoT Specialization</Heading>
      <Flex direction={{base:"column",md:"column",lg:"row"}} display={"flex"} justifyContent="space-around" mt="20px">
        
        <Box  >
            <Box padding="60px">
                <Heading>Quarter 4</Heading>
                <Text> Ambient Computing with Voice Assistants<br/> and Matter Protocol Devices</Text>
                <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter4d"}>Study Material</Button>
            </Box>
            <Box padding="60px">
                <Heading>Quarter 5</Heading>
                <Text>Embedded Programming using<br/> C and Rust</Text>
                <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter5d"}>Study Material</Button>
            </Box>
        </Box>
      </Flex>
    </Box>
  )
}

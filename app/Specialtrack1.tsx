import { Heading,Box,Badge,Text,Flex,Link,Button ,Stack} from "@chakra-ui/react"
import React from 'react'

export default function Specialtrack1() {
  return (
    <Box>
      <Heading>Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
      <Flex direction={{base:"column",md:"column",lg:"row"}}  
       display={"flex"} justifyContent="space-around" mt="20px">
        
        <Box >
            
            <Box padding="60px">
                <Heading>Quarter 4</Heading>
                <Text>Developing Smart Contracts and<br/> Planet-Scale Web 3.0 Dapps</Text>
                <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter4a"}>Study Material</Button>
            </Box>
            <Box padding="60px">
                <Heading>Quarter 5</Heading>
                <Text>Developing Planet-Scale Open Virtual<br/> and Augmented Metaverse Experiences</Text>
                <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter5a"}>Study Material</Button>
            </Box>
        </Box>
      </Flex>
    </Box>
    
  )
}

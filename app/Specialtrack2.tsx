import { Heading,Box,Badge,Flex,Text,Link,Button ,Stack} from "@chakra-ui/react"
import React from 'react'

export default function Specialtrack2() {
  return (
    <Box>
      <Heading mt='20px'>Artificial Intelligence (AI) and Deep Learning Specialization</Heading>
      <Flex direction={{base:"column",md:"column",lg:"row"}} display={"flex"} justifyContent="space-around" mt="20px">
       
        <Box padding="60px">
            <Heading>Quarter 4</Heading>
            <Text>Developing Planet-Scale Intelligent<br/> APIs and Python Programming</Text>
            <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter4b"}>Study Material</Button>
        </Box>
        <Box padding="60px">
            <Heading>Quarter 5</Heading>
            <Text>Deep Learning and MLOps</Text>
            <Button color={"blue"} mt="20px" as={"a"} variant={"link"} href={"/Quarter5b"}>Study Material</Button>
        </Box>
      </Flex>
    </Box>
  )
}

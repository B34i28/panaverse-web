import { Heading,Box,Badge,Flex,Text,Link,Button ,Stack} from "@chakra-ui/react"
import React from 'react'

export default function Specialtrack5() {
  return (
    <Box>
      <Heading mt='20px'>Genomics and Bioinformatics Specialization</Heading>
      <Flex direction={{base:"column",md:"column",lg:"row"}} display={"flex"} justifyContent="space-around" mt="20px">
        
        <Box >
            <Box padding="60px">
                <Heading>Quarter 4</Heading>
                <Text>Python for Biologists</Text>
                <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter4e"}>Study Material</Button>
            </Box>
            <Box padding="60px">
                <Heading>Quarter 5</Heading>
                <Text>Bioinformatics with Python</Text>
                <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter5e"}>Study Material</Button>
            </Box>
        </Box>
      </Flex>
    </Box>
  )
}

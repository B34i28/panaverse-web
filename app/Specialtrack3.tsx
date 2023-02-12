import { Heading,Box,Badge,Text,Flex,Link,Button ,Stack} from "@chakra-ui/react"
import React from 'react'

export default function Specialtrack3() {
  return (
    <Box >
      <Heading mt='20px'>Cloud-Native Computing Specialization</Heading>
      <Flex direction={{base:"column",md:"column",lg:"row"}} display={"flex"} justifyContent="space-around" mt="20px">
        
        <Box >
            <Box padding="60px">
                <Heading>Quarter 4</Heading>
                <Text>Certified Kubernetes Application Developer (CKAD)</Text>
                <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter4c"}>Study Material</Button>
            </Box>
            <Box padding="60px">
                <Heading>Quarter 5</Heading>
                <Text>Developing Multi-Cloud APIs using CDK for Terraform</Text>
                <Button color={"blue"} as={"a"} variant={"link"} href={"/Quarter5c"}>Study Material</Button>
            </Box>
        </Box>
      </Flex>
    </Box>
  )
}

import { Heading,Box,Badge,Text,Link,Button ,Stack} from "@chakra-ui/react"
import React from 'react'

export default function Specialtext() {
  return (
    <Box textAlign={{base:"center",md:"center",lg:"center"}} mt="30px" as="b">
        <Heading>Specialized Tracks:</Heading>
        <Text>After completing the first three quarters the participants will select<br/>
         one or more specializations consisting of two courses each</Text>
    </Box>
  )
}

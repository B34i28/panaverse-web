import { Heading,Box,Flex,Badge,Text,Link ,Stack} from "@chakra-ui/react"
import React from 'react'
import { Image } from '@chakra-ui/react'

export default function Iconintro() {
  return (

    <Flex direction={{base:"column",md:"column" ,lg:"row"}} pl={"20px"} bg="lightgray">
      <Box>
        <Image src="https://www.panaverse.co/red-p-logo-text_dao_croped.png" 
          alt="PanaVerse DAO"  pl="10px"
          boxSize={"325px"} />
      </Box>
      <Box pr="70px" textAlign={"center"}>      
        <Heading mb={"20px"} as="h1" fontSize={"66px"}>Certified Web 3.0 and Metaverse Developer</Heading>
        <Text as="b" fontSize="20px">A One and Quarter Years Panaverse DAO Earn as you Learn Program</Text>
        <br />
        <Text as="b" fontSize="20px">Getting Ready for the Next Generation of the Internet</Text>
      </Box>

    </Flex>
  )
}

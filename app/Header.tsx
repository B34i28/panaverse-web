import { Heading,Badge,Text,Link ,Stack} from "@chakra-ui/react"

import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    
    <Box bg="lightblue" p="20px" textAlign={{base:"center",md:"center",lg:"right"}}>
        <Badge colorScheme={"black"}><Link href="/">Home</Link></Badge>
        <Badge colorScheme={"black"}><Link href="https://www.piaic.org/about">About</Link></Badge>
        <Badge colorScheme={"black"}><Link href="https://www.piaic.org/">PIAIC</Link></Badge>
        <Badge colorScheme={"black"}><Link href="https://portal.piaic.org/signup">Apply</Link></Badge>
    </Box>
  )
}

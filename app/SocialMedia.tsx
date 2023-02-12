import { Heading,Box,Badge,Image,Text,Link,Button ,Stack, Flex} from "@chakra-ui/react"
import React from 'react'

export default function SocialMedia() {
  return (
    <Box>
        <Flex direction={{base:"column",md:"column",lg:"row"}} display="flex">
            <Box ml={"430px"}>
                <Link href="https://www.youtube.com/@panaverse/streams">
                <Image boxSize={"50px"} src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" alt="youtube"/>
                </Link>
            </Box>
            <Box ml="10px">
                <Link href="https://www.facebook.com/groups/panaverse">
                <Image boxSize={"50px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" alt="facebook"/>
                </Link>
            </Box>
            <Box ml="10px">
                <Link href="https://twitter.com/Panaverse_edu">
                <Image boxSize={"50px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="Twitter"/>
                </Link>
            </Box>
            <Box ml="10px">
                <Link href="https://github.com/panaverse">
                <Image boxSize={"50px"} src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="github Repo"/>
                </Link>
            </Box>
        </Flex>   
    </Box>
  )
}

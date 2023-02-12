'use client'
import React from 'react'
import { Heading,Box,Text,Link } from '@chakra-ui/react'


export default function page() {
  return (
    <Box textAlign={"center"}>
      <Heading>Quarter III (Core)</Heading>
      <Heading as="h3">$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Heading>
      <Heading>Earn While You Learn Projects</Heading>
      <Heading>A. Build Full-Stack Next.js 13 Jamstack Templates</Heading>
      <Text>You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.</Text>
      <Link href="https://github.com/panaverse/panaverse-template-standard">The Template Standard</Link>
      <Heading>B. Build QraphQL APIs</Heading>
      <Text>You will be assigned to build APIs for which you will sell subscriptions on the Panaverse DAO Marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. </Text>
    </Box>
  )
}

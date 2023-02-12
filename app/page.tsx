'use client'
import { ChakraProvider } from "@chakra-ui/react"
import Header from "./Header"
import Iconintro from "./iconintro"
import Programs from "./Programs"
import Earn from "./Earn"
import Quarters from "./Quarters"
import Specialtext from "./Specialtext"
import Specialtrack1 from "./Specialtrack1"
import Specialtrack2 from "./Specialtrack2"
import Specialtrack3 from "./Specialtrack3"
import Specialtrack4 from "./Specialtrack4"
import Specialtrack5 from "./Specialtrack5"
import Specialtrack6 from "./Specialtrack6"
import SocialMedia from "./SocialMedia"
// import { Inter } from '@next/font/google'




export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Iconintro />
      <Quarters />
      <Specialtext/>
      <Specialtrack1/>
      <Specialtrack2/>
      <Specialtrack3/>
      <Specialtrack4/>
      <Specialtrack5/>
      <Specialtrack6/>
      <SocialMedia/>
      {/* <Earn /> */}
      {/* <Programs /> */}
    </ChakraProvider>
  )
}

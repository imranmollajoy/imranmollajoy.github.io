import React from "react"
import "./layout.css"
import "./global.css"
import { ChakraProvider } from "@chakra-ui/react"
import "../../styles/fonts.css"
import theme from "../../styles/Theme"
import SEO from "../SEO"
const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  )
}

export default Layout

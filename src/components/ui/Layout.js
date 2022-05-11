import React from "react"
import "./layout.css"
import "./global.css"
import { ChakraProvider } from "@chakra-ui/react"
import "../../styles/fonts.css"
import theme from "../../styles/Theme"
const Layout = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default Layout

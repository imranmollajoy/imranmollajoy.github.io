import React from "react"
import { Heading, Text } from "@chakra-ui/react"
import { Link } from "gatsby"
import { Layout } from "../components/ui"
const NotFoundPage = () => {
  return (
    <Layout>
      <Heading as="h1" fontSize="3xl">
        Huh, weird
      </Heading>
      <Heading as="h2" fontSize="md">
        This page doesn't exist
      </Heading>
      <Text as="p">
        You can always go back to the <Link to="/">home page</Link>
      </Text>
    </Layout>
  )
}

export default NotFoundPage

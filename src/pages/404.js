import React from "react"
import { Container, Heading, Text, Box, Button } from "@chakra-ui/react"
import { Link } from "gatsby"
import { Layout } from "../components/ui"
const NotFoundPage = () => {
  return (
    <Layout>
      <Box>
        <Container
          maxW="container.xl"
          minH="100vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading as="h1" size="4xl" color="text">
            Huh
            <Heading as="span" size="4xl">
              !
            </Heading>{" "}
            Weird
          </Heading>
          <Heading as="h2" size="xl" color="text">
            This page doesn't exist
          </Heading>
          <Text as="p" size="xl" mb="4">
            However, you can always go back to the home page
          </Text>
          <Link to="/">
            <Button>Go to Home Page</Button>
          </Link>
        </Container>
      </Box>
    </Layout>
  )
}

export default NotFoundPage

import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'

const ContactMe = () => {
  const textColor = 'whiteAlpha.900'
  return (
    <Box backgroundColor="brand.500" py={64}>
      <Container maxW="container.xl">
        <Heading color={textColor}>Contact Me</Heading>
        <Text color={textColor}>Have something great in mind?</Text>
        <Box mb={3}></Box>
        <Link to="mailto:imranmollajoy@gmail.com">
          <Button colorScheme="whiteAlpha">Email Me</Button>
        </Link>
      </Container>
    </Box>
  )
}

export default ContactMe

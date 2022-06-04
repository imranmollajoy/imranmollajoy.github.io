import { Box, Button, Container, Heading, Text } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'
import { MotionDiv } from '../ui'

const ContactMe = () => {
  const textColor = 'whiteAlpha.900'
  return (
    <Box backgroundColor="brand.500" py={64}>
      <Container maxW="container.xl">
        <MotionDiv delay={0.5} animation="scale">
          <Heading color={textColor} size="2xl">
            Contact Me
          </Heading>
        </MotionDiv>
        <MotionDiv delay={0.7} animation="scale">
          <Text color={textColor}>Have something great in mind?</Text>
        </MotionDiv>
        <Box mb={3}></Box>
        <MotionDiv delay={0.9} animation="scale">
          <Link to="mailto:imranmollajoy@gmail.com">
            <Button colorScheme="whiteAlpha">Email Me</Button>
          </Link>
        </MotionDiv>
      </Container>
    </Box>
  )
}

export default ContactMe

import React from "react"
import {
  Container,
  Heading,
  VStack,
  Button,
  HStack,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { MotionDiv, MotionOnScroll, MotionText } from "../ui"

const Hero = () => {
  const sizeForBgText = useBreakpointValue({
    base: "1000%",
    md: "1500%",
    lg: "2000%",
  })
  return (
    <Box
      w="full"
      minH="100vh"
      display="flex"
      alignItems="center"
      bg="background"
      overflow="hidden"
      zIndex={2}
    >
      {/* <Box position="absolute" left={0}>
        <HeroCurve />
      </Box> */}
      <Container maxW="container.xl" position="relative">
        <MotionOnScroll>
          <Heading
            className="unselectable"
            as="h1"
            fontSize={sizeForBgText}
            color="whiteAlpha.600"
            mb={4}
            lineHeight={0.76}
            zIndex={-1}
            position="absolute"
            bottom="40%"
            right="0"
          >
            Imran Molla Joy
          </Heading>
        </MotionOnScroll>

        <VStack spacing={1} alignItems="flex-start" zIndex={2}>
          <MotionDiv duration={1} delay={0.25} animation="fromLeft">
            <Heading as="h2">Hi There</Heading>
          </MotionDiv>
          <MotionDiv delay={0.15} animation="fromLeft">
            <Heading as="h1" size="4xl" color="text">
              Hello!
            </Heading>
          </MotionDiv>

          <MotionDiv delay={0.2} animation="fromLeft">
            <Heading size="3xl" color="text">
              I am
              <MotionText />
            </Heading>
          </MotionDiv>
          <Box mb={14}></Box>
          <HStack>
            <MotionDiv delay={1.4} animation="scale">
              <Link to="#portfolio">
                <Button variant={"solid"}>Portfolio</Button>
              </Link>
            </MotionDiv>
            <MotionDiv delay={1.6} animation="scale">
              <Link to="#about">
                <Button variant={"outline"}>About me</Button>
              </Link>
            </MotionDiv>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero

import React from "react"
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react"
import MotionDiv from "../MotionDiv"

const AboutMe = () => {
  const colspanForText = useBreakpointValue({
    base: 3,
    md: 1,
  })
  const colspanForImage = useBreakpointValue({
    base: 3,
    md: 2,
  })
  const AboutMeText = () => {
    return (
      <>
        <Text as="p">
          My name is Imran Molla Joy. I am a web developer, UI designer, and
          graphic designer. I have a passion for creating and designing
          beautiful and functional websites. My specialty is ReactJS. I am
          skillfull in Gatsby, Material UI, Chakra UI. I am also skilled in
          HTML, CSS, and JavaScript. I am a self-taught programmer and I am
          always learning new things.
        </Text>
        <Text as="p">
          I am really good at graphic and UI designing. I primarily use Figma to
          create my designs.
        </Text>
      </>
    )
  }
  return (
    <Box
      w="full"
      display="flex"
      alignItems="center"
      id="about"
      minH="100vh"
      backgroundColor="whiteAlpha.900"
      shadow="xl"
      zIndex={3}
    >
      <Container maxW="container.xl" borderRadius="lg">
        <Box>
          <MotionDiv animation="fromLeft">
            <Heading as="h2" size="2xl" my={6}>
              About Me
            </Heading>
          </MotionDiv>
          <MotionDiv animation="fromLeft" delay={0.5}>
            <Box width="full">
              <AboutMeText />
            </Box>
          </MotionDiv>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutMe

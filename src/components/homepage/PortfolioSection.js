import { Link } from "gatsby"
import React, { useState } from "react"
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useBreakpointValue,
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Badge,
  Text,
} from "@chakra-ui/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlogCard from "../BlogCard"
import MotionDiv from "../MotionDiv"
const PortfolioSection = ({ portfolios }) => {
  const colspan = useBreakpointValue({
    base: 3,
    md: 1,
  })
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
  ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [modalData, setModalData] = useState("")
  function openModal(props) {
    setModalData(props)
    onOpen()
    console.log(modalData?.frontmatter?.stacks)
  }
  return (
    <Box
      w="full"
      display="flex"
      alignItems="center"
      py={12}
      backgroundColor="background"
      id="portfolio"
    >
      <Container maxW="container.xl">
        <HStack justifyContent={"space-between"} alignItems="center" mb={12}>
          <MotionDiv delay={0.5} animation="fromLeft">
            <Heading as="h2" size="2xl">
              Portfolio
            </Heading>
          </MotionDiv>
          {portfolios.length >= 4 && (
            <MotionDiv delay={1} animation="fromRight">
              <Link to="/portfolio">
                <Button>More</Button>
              </Link>
            </MotionDiv>
          )}
        </HStack>
        <SimpleGrid columns={3} spacing="3" alignItems="stretch">
          {portfolios.map((portfolio, index) => (
            <BlogCard
              key={index}
              data={portfolio}
              color={colors[index]}
              colspan={colspan}
              openModal={openModal}
              index={index}
            />
          ))}
        </SimpleGrid>
        <Box>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            scrollBehavior="inside"
            size="4xl"
          >
            <ModalOverlay bg="whiteAlpha.700" backdropFilter="blur(2px)" />
            <ModalContent>
              <ModalHeader>
                <Heading as="h2">{modalData?.frontmatter?.name}</Heading>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <GatsbyImage
                  image={getImage(modalData?.frontmatter?.featuredImg)}
                  alt={modalData?.frontmatter?.name}
                />
                <Box dangerouslySetInnerHTML={{ __html: modalData.html }} />
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Container>
    </Box>
  )
}

export default PortfolioSection

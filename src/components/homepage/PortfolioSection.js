import { Link } from 'gatsby'
import React, { useState } from 'react'
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
  Text,
} from '@chakra-ui/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PortfolioCard from '../PortfolioCard'
import { MotionDiv } from '../ui'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const PortfolioSection = ({ portfolios }) => {
  const colspan = useBreakpointValue({
    base: 3,
    md: 1,
  })
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'purple',
  ]
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [modalData, setModalData] = useState('')
  const chakraUiComponents = {
    h1: props => <Heading as="h1" paddingY="5" size="2xl" {...props} />,
    h2: props => <Heading as="h2" paddingY="5" size="xl" {...props} />,
    h3: props => <Heading as="h3" paddingY="5" size="lg" {...props} />,
    h4: props => <Heading as="h4" paddingY="5" size="md" {...props} />,
    h5: props => <Heading as="h5" paddingY="5" size="sm" {...props} />,
    h6: props => <Heading as="h6" paddingY="5" size="xl" {...props} />,
    p: props => (
      <Text lineHeight={2} paddingBottom="2" fontSize="lg" {...props} />
    ),
    img: props => <GatsbyImage marginBottom="4" {...props} />,
  }
  function openModal(props) {
    setModalData(props)
    onOpen()
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
        <HStack justifyContent={'space-between'} alignItems="center" mb={12}>
          <MotionDiv delay={0.5} animation="fromLeft">
            <Heading as="h2" size="2xl">
              Portfolio
            </Heading>
          </MotionDiv>
          {portfolios.length > 8 && (
            <MotionDiv delay={1} animation="scale">
              <Link to="/portfolio">
                <Button>More</Button>
              </Link>
            </MotionDiv>
          )}
        </HStack>
        <SimpleGrid columns={3} spacing="3" alignItems="stretch">
          {portfolios.map((portfolio, index) => (
            <PortfolioCard
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
            <ModalOverlay bg="whiteAlpha.900" />
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
                <MDXProvider components={chakraUiComponents}>
                  <MDXRenderer>{modalData?.body}</MDXRenderer>
                </MDXProvider>
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

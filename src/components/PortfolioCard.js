import React from "react"
import {
  Box,
  Heading,
  GridItem,
  Badge,
  AspectRatio,
  HStack,
  Link,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import MotionDiv from "./ui/MotionDiv"
const BlogCard = ({ data, color, colspan, openModal, index }) => {
  return (
    <GridItem colSpan={colspan}>
      <MotionDiv delay={index / 3} animation="scale">
        <Box
          alignItems="flex-start"
          bg="whiteAlpha.900"
          borderRadius="lg"
          overflow={`hidden`}
          shadow="xl"
        >
          <AspectRatio ratio={1440 / 1024}>
            <GatsbyImage
              image={getImage(data.frontmatter.featuredImg)}
              alt={data.frontmatter.title}
            />
          </AspectRatio>
          <Box p={4}>
            <HStack spacing={4} mt={1}>
              {data.frontmatter.stacks.map((stack, index) => (
                <Badge
                  ml="1"
                  fontSize="0.8em"
                  colorScheme={color}
                  key={index}
                  borderRadius={"lg"}
                >
                  {stack}
                </Badge>
              ))}
            </HStack>
            <Link onClick={() => openModal(data)}>
              <Heading as="h5" size="lg">
                {data.frontmatter.name}
              </Heading>
            </Link>
          </Box>
        </Box>
      </MotionDiv>
    </GridItem>
  )
}

export default BlogCard

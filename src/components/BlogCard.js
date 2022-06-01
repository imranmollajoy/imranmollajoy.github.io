import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Text,
  Flex,
  chakra,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const BlogCard = ({
  slug,
  title,
  category,
  featured,
  publishedDate,
  thumbnail,
}) => {
  return (
    <>
      <Box
        width="full"
        backgroundColor="whiteAlpha.900"
        shadow="lg"
        borderRadius="2xl"
        overflow={`hidden`}
      >
        <HStack spacing={8} justifyContent="space-between">
          {/* <Box width="30%" height="full">
            <GatsbyImage
              image={getImage(thumbnail)}
              alt={title}
              objectFit="cover"
              height="full"
            />
          </Box> */}
          <Box p={8}>
            <Text>{publishedDate}</Text>
            <Link to={slug}>
              <Heading as="h3">{title}</Heading>
            </Link>
            <Text>{category}</Text>
          </Box>
          {/* {featured && <p>Featured</p>} */}
        </HStack>
      </Box>
    </>
  )
}

export default BlogCard

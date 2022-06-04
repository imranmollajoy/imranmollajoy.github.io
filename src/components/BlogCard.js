import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Text,
  Flex,
  chakra,
} from '@chakra-ui/react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { MotionDiv } from './ui'
const BlogCard = ({
  slug,
  title,
  category,
  featured,
  publishedDate,
  thumbnail,
  index = 1,
}) => {
  return (
    <Box width={'100%'}>
      <MotionDiv delay={index / 4} animation="scale">
        <Box
          width="100%"
          backgroundColor="whiteAlpha.900"
          shadow="md"
          borderRadius="2xl"
          overflow={`hidden`}
          borderTop="4px solid #4941fa"
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
              {/* <Text>{publishedDate}</Text> */}
              <Text>{category}</Text>
              <Link to={slug}>
                <Heading as="h3">{title}</Heading>
              </Link>
            </Box>
            {/* {featured && <p>Featured</p>} */}
          </HStack>
        </Box>
      </MotionDiv>
    </Box>
  )
}

export default BlogCard

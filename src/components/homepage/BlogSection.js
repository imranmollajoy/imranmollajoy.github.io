import {
  Box,
  Container,
  Heading,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'
import BlogCard from '../BlogCard'
import { MotionDiv } from '../ui'
const BlogSection = ({ blogs }) => {
  return (
    <Box py={24}>
      <Container maxW="container.xl">
        <HStack justifyContent={'space-between'} alignItems="center" mb={12}>
          <MotionDiv delay={0.5} animation="fromLeft">
            <Heading as="h2" size="2xl">
              Blog
            </Heading>
          </MotionDiv>
          {blogs.length >= 1 && (
            <MotionDiv delay={1} animation="fromRight">
              <Link to="/blog">
                <Button>More</Button>
              </Link>
            </MotionDiv>
          )}
        </HStack>
        {/* map first 3 blogs */}
        <VStack spacing={4}>
          {blogs?.slice(0, 3).map(({ node }, index) => {
            const {
              id,
              slug,
              title,
              category,
              featured,
              publishedDate,
              thumbnail,
            } = node
            const newSlug = '/blog/' + slug
            return (
              <BlogCard
                key={id}
                slug={newSlug}
                title={title}
                category={category}
                featured={featured}
                publishedDate={publishedDate}
                thumbnail={thumbnail}
                index={index}
              />
            )
          })}
        </VStack>
      </Container>
    </Box>
  )
}

export default BlogSection

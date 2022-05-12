import { Box, Container, Heading, Text, Badge } from "@chakra-ui/react"
import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Layout } from "../components/ui"

const BlogPost = ({ data }) => {
  const post = data.contentfulBlogPost
  return (
    <Layout>
      <Box position="relative">
        <Box width="full" position="fixed" zIndex={-2} mt="-50vh">
          <GatsbyImage image={getImage(post.thumbnail)} alt={post.title} />
        </Box>
        <Container
          maxW="container.xl"
          backgroundColor="background"
          minH="100vh"
          borderRadius={8}
          marginTop="50vh"
          position="relative"
          shadow="lg"
          p={{ sm: 4, md: 8, lg: 24 }}
        >
          <Box>
            {post.featured && <Text>Featured</Text>}
            <Text>{post.updatedAt}</Text>
            <Badge colorScheme="blue" fontSize="md">
              {post.category}
            </Badge>
            <Heading my={4}>{post.title}</Heading>
            <Box>{renderRichText(post.body)}</Box>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogpostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      body {
        raw
      }
      featured
      updatedAt(fromNow: true)
      title
      tags
      category
      thumbnail {
        gatsbyImageData
      }
    }
  }
`
export default BlogPost

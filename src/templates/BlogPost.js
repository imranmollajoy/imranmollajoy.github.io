import { Box, Container, Heading, Text, Badge } from "@chakra-ui/react"
import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Layout } from "../components/ui"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
const BlogPost = ({ data }) => {
  const post = data.contentfulBlogPost
  const renderRichTextOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.UNDERLINE]: text => <u>{text}</u>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text
          textAlign="left"
          my={4}
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
        >
          {children}
        </Text>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <Heading as="h1" size="xl">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading as="h2" size="lg">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading as="h3" size="md">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading as="h4" size="md">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Heading as="h5" size="sm">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Heading as="h6">{children}</Heading>
      ),
    },
  }
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
            <Box>{renderRichText(post.body, renderRichTextOptions)}</Box>
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

import React from "react"
import { graphql, Link } from "gatsby"
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Layout } from "../../components/ui"
import BlogCard from "../../components/BlogCard"
const Blog = ({ data }) => {
  console.log(data)
  const blogs = data.blogs.edges
  return (
    <Layout>
      <Box>
        <Container maxW="container.lg" py={24}>
          <Heading size="lg" mb={12}>
            Imran Molla Joy
          </Heading>

          <VStack spacing={4}>
            {blogs.map(({ node }) => {
              const {
                id,
                slug,
                title,
                category,
                featured,
                publishedDate,
                thumbnail,
              } = node
              return (
                <BlogCard
                  key={id}
                  slug={slug}
                  title={title}
                  category={category}
                  featured={featured}
                  publishedDate={publishedDate}
                  thumbnail={thumbnail}
                />
              )
            })}
          </VStack>
          <Box mt={24}>
            Go to <Link to="/">home page</Link>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export const BlogsQuery = graphql`
  query BlogpostsQuery {
    blogs: allContentfulBlogPost(sort: { fields: featured }) {
      edges {
        node {
          id
          title
          slug
          publishedDate(fromNow: true)
          featured
          tags
          category
          thumbnail {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Blog

import React from "react"
import { graphql, Link } from "gatsby"
import { Box, Heading, Text } from "@chakra-ui/react"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Blog = ({ data }) => {
  console.log(data)
  const blogs = data.blogs.edges
  return (
    <Box>
      {blogs.map(({ node }) => {
        return (
          <Box>
            <Link to={`/blog/${node.slug}`}>
              <Heading>{node.title}</Heading>
            </Link>
            <Box>{renderRichText(node.body)}</Box>
            <Box>{node.category}</Box>
            <Box>
              {node.tags.map(tag => {
                return <Box as="span">{tag}</Box>
              })}
            </Box>
          </Box>
        )
      })}
    </Box>
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
          body {
            raw
          }
        }
      }
    }
  }
`

export default Blog

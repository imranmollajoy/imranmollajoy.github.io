import {
  Box,
  Container,
  Heading,
  Text,
  Badge,
  List,
  ListItem,
  UnorderedList,
  OrderedList,
  Divider,
} from '@chakra-ui/react'
import React from 'react'
import { graphql, Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Layout } from '../components/ui'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
const BlogPost = ({ data }) => {
  const post = data.contentfulBlogPost
  const renderRichTextOptions = {
    renderMark: {
      [MARKS.BOLD]: text => <strong>{text}</strong>,
      [MARKS.UNDERLINE]: text => <u>{text}</u>,
      [MARKS.ITALIC]: text => <em>{text}</em>,
      [MARKS.CODE]: text => <code>{text}</code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <Text
          textAlign="left"
          my={2}
          fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
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
        <Heading as="h4" size="sm">
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
      [BLOCKS.UL_LIST]: (node, children) => (
        <UnorderedList>
          {children.map((child, index) => (
            <ListItem key={index}>{child}</ListItem>
          ))}
        </UnorderedList>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <OrderedList>
          {children.map((child, index) => (
            <ListItem key={index}>{child}</ListItem>
          ))}
        </OrderedList>
      ),
      [BLOCKS.HR]: () => <Divider />,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        const { file } = node.data.target.fields
        const { url } = file.url
        const { title } = node.data.target.fields
        return (
          <Box>
            <GatsbyImage image={getImage(post.thumbnail)} alt={title} />
          </Box>
        )
      },
    },
  }
  const img = 'https://source.unsplash.com/random/600x600?nature'
  return (
    <Layout>
      <Box position="relative">
        <Box width="full" position="fixed" zIndex={-2} mt="-50vh">
          {post.thumbnail && (
            <GatsbyImage image={getImage(post.thumbnail)} alt={post.title} />
          )}
          {!post.thumbnail && (
            <img src={img} alt={post.title} width="100%" height="100%" />
          )}
        </Box>

        <Container
          maxW="container.lg"
          backgroundColor="white"
          minH="100vh"
          borderRadius={8}
          marginTop="50vh"
          position="relative"
          shadow="lg"
          p={{ sm: 4, md: 8, lg: 24 }}
        >
          <Link to="/">
            <Heading size="lg" mb={12}>
              Imran Molla Joy
            </Heading>
          </Link>
          <Box>
            {post.featured && <Text>Featured</Text>}
            {/* <Text>{post.updatedAt}</Text> */}
            <Badge colorScheme="blue" fontSize="md">
              {post.category}
            </Badge>
            <Heading my={4}>{post.title}</Heading>
            <Box textAlign="justify">
              {renderRichText(post.body, renderRichTextOptions)}
            </Box>
            <Box mt={24}>
              Go to <Link to="/blog">blog</Link>
            </Box>
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

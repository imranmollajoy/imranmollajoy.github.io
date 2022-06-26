import React from 'react'
import {
  Hero,
  PortfolioSection,
  AboutMe,
  ContactMe,
  BlogSection,
} from '../components/homepage'
import { graphql } from 'gatsby'
import { Layout } from '../components/ui'

export default function Home({ data }) {
  console.log(data)
  const portfolios = data.portfolios.nodes
  const blogs = data.blogs.edges
  return (
    <Layout>
      <Hero />
      <PortfolioSection portfolios={portfolios} />
      <AboutMe />
      <ContactMe />
  {/* disabling blog section untill i have sufficient articles */}
  {/*<BlogSection blogs={blogs} /> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomepageQuery {
    portfolios: allMdx(
      filter: { frontmatter: { category: { eq: "portfolio" } } }
      limit: 4
    ) {
      nodes {
        body
        frontmatter {
          category
          featuredImg {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          name
          slug
          stacks
          title
        }
      }
    }
    blogs: allContentfulBlogPost(sort: { fields: featured }) {
      edges {
        node {
          id
          title
          slug
          featured
          tags
          category
        }
      }
    }
  }
`

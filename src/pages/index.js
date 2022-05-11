import React from "react"
import {
  Hero,
  PortfolioSection,
  AboutMe,
  ContactMe,
} from "../components/homepage"
import { graphql } from "gatsby"
import { Layout } from "../components/ui"

export default function Home({ data }) {
  const portfolios = data.portfolios.nodes
  console.log(data)
  return (
    <Layout>
      <Hero />
      <PortfolioSection portfolios={portfolios} />
      <AboutMe />
      <ContactMe />
    </Layout>
  )
}

export const pageQuery = graphql`
  query HomepageQuery {
    portfolios: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "portfolio" } } }
      limit: 4
    ) {
      nodes {
        html
        frontmatter {
          name
          title
          slug
          stacks
          featuredImg {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  }
`

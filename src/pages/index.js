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
  console.log(data)
  const portfolios = data.portfolios.nodes
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
  }
`

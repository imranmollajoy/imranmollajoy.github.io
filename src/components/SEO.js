import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
const SEO = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:url" content="http://imranmolla.com/" />
      <meta property="og:image" content={data.site.siteMetadata.image} />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
    </Helmet>
  )
}

export default SEO

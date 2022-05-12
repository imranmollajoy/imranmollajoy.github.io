exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulBlogPost {
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
  `)
  data.allContentfulBlogPost.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve(`./src/templates/BlogPost.js`),
      context: { slug: slug },
    })
  })
}

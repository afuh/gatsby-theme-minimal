module.exports = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(query)

  data.allContentfulProject.edges.forEach(({ node }) => {
    const { slug } = node

    createPage({
      path: slug,
      component: require.resolve('../src/templates/post.js'),
      context: {
        slug
      }
    })
  })
}

const query = `
  {
    allContentfulProject {
      edges {
        node {
          slug
        }
      }
    }
  }
`

module.exports = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(query)

  createPage({
    path: "/",
    component: require.resolve("../src/templates/home.js"),
    context: {
      data
    }
  })
}

const query = `
  {
    allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM D, YYYY")
          content {
            md: childMarkdownRemark {
              timeToRead
            }
          }
        }
      }
    }
  }
`

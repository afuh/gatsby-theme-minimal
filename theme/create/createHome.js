module.exports = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(query)

  createPage({
    path: '/',
    component: require.resolve("../src/templates/home.js"),
    context: {
      data
    }
  })
}

const query = `
  {
    contentfulProjects {
      projects {
        id
        title
        slug
      }
    }
  }
`

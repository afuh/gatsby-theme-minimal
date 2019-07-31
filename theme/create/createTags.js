module.exports = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(query)

  // create a tag page
  data.allContentfulPost.group.forEach(({ name }) => {
    createPage({
      path: `/tag/${name}`,
      component: require.resolve("../src/templates/tag.js"),
      context: {
        tag: name
      }
    })
  })

  // create a tag index
  createPage({
    path: "/tag",
    component: require.resolve("../src/templates/tagIndex.js"),
    context: {
      tags: data.allContentfulPost.group
    }
  })
}

const query = `
  {
    allContentfulPost {
      group(field: tags) {
        name: fieldValue
        totalCount
      }
    }
  }
`

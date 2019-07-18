module.exports = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(query)

  // create a tag page
  data.allContentfulProject.group.forEach(({ name }) => {
    createPage({
      path: `/tag/${name}`,
      component: require.resolve('../src/templates/tag.js'),
      context: {
        tag: name
      }
    })
  })

  // create a tag index
  createPage({
    path: '/tag',
    component: require.resolve('../src/templates/tagIndex.js'),
    context: {
      tags: data.allContentfulProject.group
    }
  })
}

const query = `
  {
    allContentfulProject {
      group(field: tags) {
        name: fieldValue
        totalCount
      }
    }
  }
`

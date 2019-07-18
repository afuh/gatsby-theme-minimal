const createHome = require(`./create/createHome`)
const createPost = require(`./create/createPost`)
exports.createPages = async ({ actions, graphql }) => {
  await Promise.all([
    createPost({ actions, graphql }),
    createHome({ actions, graphql }),
  ])
}

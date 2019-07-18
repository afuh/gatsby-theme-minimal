const createHome = require(`./create/createHome`)
const createPost = require(`./create/createPost`)
const createTags = require(`./create/createTags`)

exports.createPages = async ({ actions, graphql }) => {
  await Promise.all([
    createPost({ actions, graphql }),
    createHome({ actions, graphql }),
    createTags({ actions, graphql })
  ])
}

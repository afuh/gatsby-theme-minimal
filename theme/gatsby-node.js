const createHome = require(`./create/createHome`)
exports.createPages = async ({ actions, graphql }) => {
  await Promise.all([
    createHome({ actions, graphql }),
  ])
}

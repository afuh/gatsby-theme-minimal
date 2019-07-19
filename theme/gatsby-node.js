const fs = require('fs-extra')

const createHome = require(`./create/createHome`)
const createPost = require(`./create/createPost`)
const createTags = require(`./create/createTags`)

exports.onPreBootstrap = ({ reporter }) => {
  const contentFolder = 'theme-content'
  const themeContent = `../node_modules/gatsby-theme-minimal/${contentFolder}`

  if (!fs.existsSync(contentFolder)) {
    reporter.info(`creating the ${contentFolder} directory`)
    fs.copySync(themeContent, contentFolder)
  }
}

exports.createPages = async ({ actions, graphql }) => {
  await Promise.all([
    createPost({ actions, graphql }),
    createHome({ actions, graphql }),
    createTags({ actions, graphql })
  ])
}

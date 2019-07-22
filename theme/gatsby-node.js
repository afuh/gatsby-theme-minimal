const fs = require("fs-extra")
const path = require("path")

const pack = require("./package.json")

const createHome = require("./create/createHome")
const createPost = require("./create/createPost")
const createTags = require("./create/createTags")

exports.onPreBootstrap = ({ reporter }) => {
  const contentFolder = "theme-content"
  const isThemePath = fs.existsSync(path.resolve(`node_modules/${pack.name}`))
  const themeContent = path.resolve(`node_modules/${pack.name}/${contentFolder}`)

  if (!fs.existsSync(contentFolder) && isThemePath) {
    reporter.info(`creating the ${contentFolder} directory`)
    fs.copySync(themeContent, contentFolder)
  }
}

exports.createPages = async ({ actions, graphql }) => {
  actions.createPage({
    path: "/404/",
    component: require.resolve("./src/templates/404")
  })

  await Promise.all([
    createPost({ actions, graphql }),
    createHome({ actions, graphql }),
    createTags({ actions, graphql })
  ])
}

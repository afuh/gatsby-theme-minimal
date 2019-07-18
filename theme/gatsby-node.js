exports.createPages = ({ actions }) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/index.js"),
    context: {
      heading: "Your Theme Here",
      content: `
        <p>
          Hello!!
        </p>
      `
    }
  })
}

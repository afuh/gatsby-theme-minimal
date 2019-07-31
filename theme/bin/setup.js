const contentfulImport = require("contentful-import")
const inquirer = require("inquirer")
const chalk = require("chalk")
const path = require("path")

console.log(`
  In order to upload the 'Post' content model you need to provide your Space ID
  and the Content Management API token.
  Go to ${chalk.yellow(
    `app.contentful.com ${chalk.red("->")} Space Settings ${chalk.red(
      "->"
    )} API keys`
  )}
`)

const questions = [
  {
    name: "spaceId",
    message: "Your Space ID",
    validate: input =>
      /^[a-z0-9]{12}$/.test(input) ||
      "Space ID must be 12 lowercase characters"
  },
  {
    name: "managementToken",
    message: "Your Content Management API access token"
  },
  {
    name: "examplePosts",
    message: "Should I create a sample post entry?",
    type: "list",
    choices: ["yes", "no"]
  }
]

inquirer
  .prompt(questions)
  .then(({ spaceId, managementToken, examplePosts }) => {

    const options = {
      contentFile: path.resolve("bin/contentful-content.json"),
      spaceId,
      managementToken,
      contentModelOnly: examplePosts === "no"
    }

    contentfulImport(options)
      .then(() => {
        console.log(
          `All set! ${examplePosts === "no" ?
            `⚠️  Remember to add content in ${chalk.yellow("app.contentful.com")} ⚠️` : ""}
          `
        )
      })
      .catch(err => {
        console.log("Oh no! Some errors occurred!", err)
      })
  })

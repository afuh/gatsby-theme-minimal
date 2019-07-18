require('dotenv').config({ path: `.env`})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-minimal",
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.TOKEN
      }
    }
  ]
}

require('dotenv').config({ path: `.env`})

module.exports = {
  plugins: [
    {
      resolve: "@afuh/gatsby-theme-minimal",
      options: {
        title: 'Gatsby Minimal',
        description: 'a minimalistic blog theme.',
        siteUrl: 'https://gatsby-theme-minimal.netlify.com',
        contentful: {
          spaceId: process.env.SPACE_ID,
          accessToken: process.env.TOKEN
        }
      }
    }
  ]
}

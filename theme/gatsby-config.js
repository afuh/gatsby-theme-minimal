module.exports = options => ({
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: options.spaceId,
        accessToken: options.accessToken
      }
    }
  ]
})

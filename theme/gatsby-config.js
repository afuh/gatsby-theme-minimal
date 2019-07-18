module.exports = options => ({
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: options.spaceId,
        accessToken: options.accessToken
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#78ff78',
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Open Sans',
            variants: ['400', '700', '800']
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'GA-xxxx',
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: options.title,
        short_name: options.title,
        description: options.description,
        start_url: '/',
        background_color: '#fff',
        theme_color: '#000',
        display: 'standalone'
        // icon: 'theme/assets/icon-512x512.png'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-external-links',
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-numbered-footnotes',
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
              withWebp: true,
              backgroundColor: 'transparent'
            }
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify'
  ]
})

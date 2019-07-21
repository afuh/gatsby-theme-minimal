const defaultMeta = {
  title: 'Gatsby Minimal',
  description: 'a minimalistic blog theme.',
  siteUrl: 'https://gatsby-theme-minimal.netlify.com',
  backgroundColor: "#FEFEFE",
  themeColor: "#212129",
  accent: "#78ff78"
}

module.exports = options => ({
  siteMetadata: {
    title: options.title || defaultMeta.title,
    description: options.description || defaultMeta.description,
    siteUrl: options.siteUrl || defaultMeta.siteUrl,
    image: '/icons/icon-512x512.png'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: options.contentful.spaceId,
        accessToken: options.contentful.accessToken,
        ...options.contentful
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: defaultMeta.accent,
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: options.title || defaultMeta.title,
        short_name: options.title || defaultMeta.title,
        description: options.description || defaultMeta.description,
        start_url: options.siteUrl || defaultMeta.siteUrl,
        background_color: defaultMeta.backgroundColor,
        theme_color: defaultMeta.themeColor,
        display: 'standalone',
        icon: 'theme-content/images/icon-512x512.png'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-external-links',
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-numbered-footnotes',
          'gatsby-remark-prismjs',
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
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            query: `{
              allContentfulPost(sort: { fields: createdAt, order: DESC  }) {
                edges {
                  node {
                    createdAt
            				slug
                    title
                    image {
                      file {
                        url
                        contentType
                        details {
                          size
                        }
                      }
                    }
                    content {
                      md: childMarkdownRemark {
                        excerpt(pruneLength: 250)
                      }
                    }
                  }
                }
              }
            }`,
            title: options.title || defaultMeta.title,
            description: options.description || defaultMeta.description,
            output: '/rss.xml',
            serialize: ({ query: { site, allContentfulPost } }) =>
              allContentfulPost.edges.map(({ node }) => ({
                title: node.title,
                description: node.content.md.excerpt,
                date: node.createdAt,
                url: site.siteMetadata.siteUrl + "/" + node.slug,
                guid: site.siteMetadata.siteUrl + "/" + node.slug,
                enclosure: {
                  url: 'https:' + node.image.file.url,
                  type: node.image.file.contentType,
                  size: node.image.file.details.size
                }
              }))
          }
        ]
      }
    },
    'gatsby-plugin-offline'
  ]
})

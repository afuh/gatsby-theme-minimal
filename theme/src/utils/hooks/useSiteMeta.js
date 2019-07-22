import { useStaticQuery, graphql } from "gatsby"

export const useSiteMeta = () => {
  const { site: { siteMetadata } } = useStaticQuery(
    graphql`
      query SITE_META {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
          }
        }
      }
    `
  )

  return siteMetadata
}

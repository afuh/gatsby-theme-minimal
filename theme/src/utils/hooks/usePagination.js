import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "./"

const query = graphql`
  {
    allContentfulPost {
      edges {
        node {
          slug
        }
      }
    }
  }
`

export const usePagination = () => {
  const { location } = useLocation()
  const { allContentfulPost } = useStaticQuery(query)

  const posts = allContentfulPost.edges.map(({ node }) => node)
  const pathname = location.pathname.replace(/\//g, "")

  return posts.reduce((acc, post, i) => {
    if (post.slug === pathname) {
      return {
        next: posts.length === i + 1 ? acc.prev : posts[i + 1].slug,
        prev: i === 0 ? acc.next : posts[i - 1].slug
      }
    }
    return acc
  }, { prev: "", next: "" })
}

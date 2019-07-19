import { graphql } from "gatsby"

export const postFragment = graphql`
  fragment postInfo on ContentfulPost {
    id
    title
    slug
  }
`

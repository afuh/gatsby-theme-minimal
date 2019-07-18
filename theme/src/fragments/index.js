import { graphql } from "gatsby"

export const projectFragment = graphql`
  fragment projectInfo on ContentfulProject {
    id
    title
    slug
  }
`

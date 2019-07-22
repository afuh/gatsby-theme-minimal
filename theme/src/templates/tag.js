import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import { List, Inner } from "../utils/UI"

const TagTemplate = ({ pageContext, data: { allContentfulPost } }) => {
  const posts = allContentfulPost.edges.map(({ node }) => node)

  return (
    <Layout
      heading={(
        <>
          <h2>{pageContext.tag}</h2>
          <Link to='/tag'><h1>tags</h1></Link>
        </>
      )}
    >
      <Inner
        as='section'
        margin
      >
        <List data={posts} />
      </Inner>
    </Layout>
  )
}

TagTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.shape({
    allContentfulPost: PropTypes.object
  }).isRequired
}

export default TagTemplate

export const pageQuery = graphql`
  query($tag: [String!]) {
    allContentfulPost(
      filter: { tags: { in: $tag } }
    ) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`

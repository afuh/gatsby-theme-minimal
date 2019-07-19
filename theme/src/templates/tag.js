import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import PreviewData from '../components/previewData'

const TagTemplate = ({ pageContext, data: { allContentfulPost } }) => {
  const posts = allContentfulPost.edges.map(({ node }) => node)

  return (
    <Layout heading={pageContext.tag}>
      <PreviewData data={posts} />
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
          ...postInfo
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'

import Layout from "../components/layout"
import PreviewData from "../components/previewData"

const PostTemplate = ({ data: { post } }) => (
  <Layout heading={post.title}>
    <PreviewData data={post} />
  </Layout>
)

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

export default PostTemplate

export const pageQuery = graphql`
  query POST_PAGE_QUERY ($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      ...postInfo
      tags
      image {
        fluid(maxWidth: 960) {
          ...GatsbyContentfulFluid_withWebp
        }
        file {
          url
          contentType
          details {
            image {
              width
              height
            }
          }
        }
      }
      content {
        md: childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`

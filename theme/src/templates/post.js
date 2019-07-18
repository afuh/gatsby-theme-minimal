import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'

import Layout from "../components/layout"
import PreviewData from "../components/previewData"

const PostTemplate = ({ data: { project } }) => (
  <Layout heading={project.title}>
    <PreviewData data={project} />
  </Layout>
)

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

export default PostTemplate

export const pageQuery = graphql`
  query PROJECT_PAGE_QUERY ($slug: String!) {
    project: contentfulProject(slug: { eq: $slug }) {
      ...projectInfo
      url
      code
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

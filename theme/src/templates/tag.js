import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import PreviewData from '../components/previewData'

const TagTemplate = ({ pageContext, data: { allContentfulProject } }) => {
  const projects = allContentfulProject.edges.map(({ node }) => node)

  return (
    <Layout heading={pageContext.tag}>
      <PreviewData data={projects} />
    </Layout>
  )
}

TagTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.shape({
    allContentfulProject: PropTypes.object
  }).isRequired
}

export default TagTemplate

export const pageQuery = graphql`
  query($tag: [String!]) {
    allContentfulProject(
      filter: { tags: { in: $tag } }
    ) {
      edges {
        node {
          ...projectInfo
        }
      }
    }
  }
`

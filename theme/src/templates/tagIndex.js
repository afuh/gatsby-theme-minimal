import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import PreviewData from '../components/previewData'

const AllTagsTemplate = ({ pageContext: { tags } }) => {
  const formatTags = tags.map(tag => ({
    slug: `tag/${tag.name}`,
    title: `${tag.name} (${tag.totalCount})`
  }))

  return (
    <Layout heading='tags'>
      <PreviewData data={formatTags} />
    </Layout>
  )
}

AllTagsTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired
}

export default AllTagsTemplate

import React from 'react'
import PropTypes from 'prop-types'

const Preview = ({ data }) => (
  <pre>
    {JSON.stringify(data, null, 2 )}
  </pre>
)

Preview.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

export default Preview

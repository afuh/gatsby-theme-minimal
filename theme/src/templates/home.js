import React from "react"
import PropTypes from 'prop-types'

import Layout from "../components/layout"
import PreviewData from "../components/previewData"

const Home = ({ pageContext: { data } }) => (
  <Layout heading='Home'>
    <PreviewData data={data} />
  </Layout>
)

Home.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default Home

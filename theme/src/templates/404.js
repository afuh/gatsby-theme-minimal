import React from 'react'
import { Link } from "gatsby"

import Layout from '../components/layout'
import Error from '../components/error'

const NotFoundPage = () => (
  <Layout
    heading={(
      <Link to='/'><h1>404</h1></Link>
    )}
  >
    <Error />
  </Layout>
)

export default NotFoundPage

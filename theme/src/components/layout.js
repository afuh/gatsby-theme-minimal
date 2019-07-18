import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ heading, children }) => (
  <main>
    <h1>{heading}</h1>
    {children}
  </main>
)

Layout.propTypes = {
  heading: PropTypes.string
}

export default Layout

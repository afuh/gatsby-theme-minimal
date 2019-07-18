import React from "react"
import { Layout } from "gatsby-theme-minimal"

export default ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.heading}</h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

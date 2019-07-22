import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import { FadeInText, List, Inner } from "../utils/UI"
import { useSiteMeta, useSwitchTheme } from "../utils/hooks"

const HomeTemplate = ({ pageContext: { data } }) => {
  const { title, description } = useSiteMeta()
  const { switchTheme } = useSwitchTheme()
  const posts = data.allContentfulPost.edges.map(({ node }) => node)

  return (
    <Layout
      heading={(
        <>
          <FadeInText
            as="h1"
            duration={0.6}
            initialOpacity={0.01}
            onClick={() => switchTheme()}
          >
            {title}
          </FadeInText>
          <h2>{description}</h2>
        </>
      )}
    >
      <Inner
        as='section'
        margin
      >
        <List
          data={posts}
          home
        />
      </Inner>
    </Layout>
  )
}

HomeTemplate.propTypes = {
  pageContext: PropTypes.object.isRequired
}

export default HomeTemplate

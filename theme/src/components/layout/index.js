import React from "react"
import PropTypes from "prop-types"
import styled, { css, ThemeProvider } from "styled-components"

import SEO from "../../utils/seo"
import { GlobalStyles, media } from "../../utils/styles"
import { useSwitchTheme, useLocation } from "../../utils/hooks"

import Header from "./header"

const Main = styled.main`
  ${media.phone(css`
    min-height: calc(100vh - ${({ theme }) => theme.headerHeight}px);
  `)}
`

const Layout = ({ children, seo, heading }) => {
  const { theme } = useSwitchTheme()
  const { location } = useLocation()

  return (
    <>
      <SEO
        {...seo}
        pathname={seo ? seo.pathname : location.pathname}
      />
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Header heading={heading} />
          <Main>
            {children}
          </Main>
        </>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  seo: PropTypes.object,
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

export default Layout

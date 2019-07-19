import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.globalWidth}px;
  margin-top: 20px;
  font-family: "Open Sans", sans-serif;

  h2, h3 {
    margin-top: 40px;
    margin-bottom: 8px;
  }

  p, li {
    margin-top: 0;
    font-size: 1.6rem;
    line-height: 1.5;
  }

  a {
    ${({ theme }) => theme.anchorHover}
  }

  ul {
    padding-left: 20px;

    li {
      display: list-item;
      text-align: match-parent;
    }
  }

  hr {
    display: block;
    height: 2px;
    width: 120px;
    background-color: ${({ theme }) => theme.softGray};
    margin: 30px auto;
    border-width: 0;
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.softGray};
    padding-left: 20px;
    margin-left: 0;
    font-style: italic;
  }
`

export const MarkdownWrapper = ({ html, children, ...rest }) => {
  if (children) {
    return (
      <Wrapper
        {...rest}
      >
        {children}
      </Wrapper>
    )
  }

  return (
    <Wrapper
      dangerouslySetInnerHTML={{ __html: html }}
      {...rest}
    />
  )
}

MarkdownWrapper.propTypes = {
  html: PropTypes.string
}

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { prismCSS } from "../prism"

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.postWidth}px;
  font-family: "Open Sans", sans-serif;

  h2, h3 {
    margin-top: 40px;
    margin-bottom: 8px;
  }

  p, li {
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

  sup {
    margin: 0 0.2rem;
    line-height: 1;
  }

  .footnote-ref,
  .footnote-backref {
    box-shadow: none;
    &:hover,
    &:active,
    &:focus {
      box-shadow: none;
      background: ${({ theme }) => theme.accent};
      color: ${({ theme }) => theme.primary};
      text-decoration: none;
    }
  }

  .footnotes {
    margin-top: 24px;

    ol {
      margin-top: 14px;
    }

    li {
      margin-bottom: 12px;
      font-size: 1.4rem;

      p {
        font-size: 1.4rem;
        display: inline;
      }
    }
  }

  ${prismCSS}
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

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { media } from '../../utils/styles'
import { Inner } from '../../utils/UI'

const Wrapper = styled.header`
  display: flex;
  justify-content: center;

  ${({ theme }) => theme && css`
    height: ${theme.headerHeight.desktop}px;
    background: ${theme.black};

    ${media.phone(css`
      height: ${theme.headerHeight.mobile}px;
    `)}
  `};

  .heading {
    flex: 1;

    h1, h2 {
      color: ${({ theme }) => theme.white};
      font-weight: 900;
      font-size: 5.0rem;
      margin: 0;

      ${media.phone(css`
        text-align: center;
        font-size: 3.4rem;
      `)}
    }

    h2 {
      font-weight: 700;
      font-size: 2.0rem;
    }
  }

  .nav {
    text-align: right;

    li {
      list-style: none;
      font-size: 1.8rem;
      text-transform: lowercase;
      margin: 1.2rem 0;
    }

    ${media.phone(css`
      display: none;
    `)}
  }
`

export const Link = styled(GatsbyLink)`
  color: ${({ theme }) => theme.gray};

  &:hover,
  &:active,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.white};
  }
`

const Heading = ({ data }) => (
  <div className='heading'>
    {typeof data === 'string' ?
      <h1>{data}</h1> :
      data
    }
  </div>
)

Heading.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

const Header = ({ heading }) => (
  <Wrapper>
    <Inner>
      <Heading data={heading} />
    </Inner>
  </Wrapper>
)

Header.propTypes = {
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
}

export default Header

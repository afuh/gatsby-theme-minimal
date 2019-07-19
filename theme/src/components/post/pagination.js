import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink, navigate } from "gatsby"
import styled, { css } from "styled-components"
import mousetrap from "mousetrap"

import { usePagination, useViewedPost } from '../../utils/hooks'
import { Arrow } from '../../utils/UI/icons'
import { media } from '../../utils/styles'

const Wrapper = styled.div`
  display: flex;

  ${media.phone(css`
    justify-content: center;
    align-self: center;
    margin-top: 20px;
  `)}
`

const Link = styled(GatsbyLink)`
  width: 80px;
  padding: 5px 10px;
  margin-left: 10px;
  border: 1px solid ${({ theme }) => theme.softGray};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1.7rem;
  }

  &:hover,
  &:active,
  &:focus {
    border: 1px solid ${({ theme }) => theme.accent};

    svg {
      fill: ${({ theme }) => theme.accent};
    }
  }

  ${media.phone(css`
    width: 100%;
    margin: 0;
    height: 60px;

    svg {
      height: 2rem;
    }
  `)}
`

const Button = ({ children, slug, ...rest }) => (
  <Link
    to={'/' + slug}
    {...rest}
  >
    {children}
  </Link>
)

Button.propTypes = {
  slug: PropTypes.string.isRequired
}

const Pagination = () => {
  const { next, prev } = usePagination()
  const { addViewedPost } = useViewedPost()

  useEffect(() => {
    mousetrap.bind('right', () => {
      navigate(next)
      addViewedPost(next)
    })
    mousetrap.bind('left', () => {
      navigate(prev)
      addViewedPost(prev)
    })

    return () => {
      mousetrap.unbind('left')
      mousetrap.unbind('right')
    }
  })

  return (
    <Wrapper>
      <Button
        slug={prev}
        onClick={() => addViewedPost(prev)}
      >
        <Arrow.left/>
      </Button>
      <Button
        slug={next}
        onClick={() => addViewedPost(next)}
      >
        <Arrow.right/>
      </Button>
    </Wrapper>
  )
}

export default Pagination

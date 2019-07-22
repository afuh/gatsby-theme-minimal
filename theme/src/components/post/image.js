import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Img from "gatsby-image"

import { media } from "../../utils/styles"
import { usePostData } from "../../utils/hooks"

const ImageWrapper = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset -2px 4px 10px rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
  }

  &#mobile {
    display: none;
    visibility: hidden;

    ${media.phone(css`
      display: block;
      visibility: visible;
    `)}
  }

  &#desktop {
    ${media.phone(css`
      display: none;
      visibility: hidden;
    `)}
  }
`

const Image = ({ id }) => {
  const { image, title } = usePostData()

  return (
    <ImageWrapper id={id}>
      <Img
        fluid={image.fluid}
        alt={title}
      />
    </ImageWrapper>
  )
}

Image.propTypes = {
  id: PropTypes.string
}

export default Image

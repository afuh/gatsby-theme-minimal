import React from "react"
import styled, { css } from "styled-components"

import Content from "./content"

import Image from "./image"
import { Inner } from "../../utils/UI"
import { media } from "../../utils/styles"

const Wrapper = styled.div`
  display: flex;
  transform: translateY(-64px);

  ${media.phone(css`
    transform: translateY(0);
    flex-direction: column;
    margin-bottom: 40px;

    #content {
      order: 2;
    }

    #external {
      order: 1;
    }
  `)}
`

const Post = () => (
  <article>
    <Image id='mobile'/>
    <Inner>
      <Wrapper>
        <Content />
      </Wrapper>
    </Inner>
  </article>
)

export default Post

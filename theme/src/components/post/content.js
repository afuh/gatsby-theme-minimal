import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Footer from "./footer"
import Image from "./image"
import { MarkdownWrapper } from "../../utils/UI"
import { usePostData } from "../../utils/hooks"

const Wrapper = styled.div`
  .text-wrapper {
    &::after {
      content: '';
      display: block;
      height: 2px;
      background-color: ${({ theme }) => theme.softGray};
      margin: 40px auto 0;
    }
  }
`

const Content = () => {
  const { content } = usePostData()

  return (
    <Wrapper>
      <Image
        id='desktop'
      />
      <MarkdownWrapper
        className='text-wrapper'
        html={content.md.html}
      />
      <Footer />
    </Wrapper>
  )
}

Content.propTypes = {
  id: PropTypes.string
}

export default Content

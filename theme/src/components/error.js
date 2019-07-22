import React, { useState } from "react"
import styled, { css } from "styled-components"

const Wrapper = styled.div`
  ${({ theme }) => theme && css`
    min-height: calc(100vh - ${theme.headerHeight}px);
  `};

  padding: 10px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
  }

  #image-wrapper {
    width: 300px;
    height: 300px;
  }
`

const ImageWrapper = styled.div.attrs({
  id: "image-wrapper"
})`
  position: relative;
  border: 10px solid #fff;

  .placeholder {
    opacity: ${({ show }) => show ? 1 : 0};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f6f6f680;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;

    opacity: ${({ show }) => show ? 0 : 1};

    transition: opacity 1s;
  }
`

const ErrorPage = () => {
  const [loading, setLoading] = useState(true)

  return (
    <Wrapper>
      <p>The page you are looking for doesn&apos;t exist, but here is a cute cat for you.</p>
      <ImageWrapper show={loading}>
        <div className='placeholder'/>
        <img
          onLoad={() => setLoading(false)}
          src='https://source.unsplash.com/random/300/?cat,cats'
          alt='🐈'
        />
      </ImageWrapper>
    </Wrapper>
  )
}

export default ErrorPage

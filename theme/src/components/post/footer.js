import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Pagination from "./pagination"
import { usePostData } from "../../utils/hooks"

const Wrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .tag-box {
    display: inline;
    padding: 5px 10px;
    margin-right: 10px;
    background: ${({ theme }) => theme.softGray};
    font-weight: 700;
    font-size: 1.2rem;

    &:hover,
    &:active,
    &:focus {
      background: ${({ theme }) => theme.gray}5e;
    }
  }
`

const Tags = () => {
  const { tags } = usePostData()

  return (
    <div>
      {tags && tags.map(tag => (
        <div
          key={tag}
          className='tag-box'
        >
          <Link to={`/tag/${tag}`}>{tag}</Link>
        </div>
      ))}
    </div>
  )
}

const Footer = () => (
  <Wrapper>
    <Tags />
    <Pagination />
  </Wrapper>
)

export default Footer

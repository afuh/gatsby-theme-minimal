import React, { createContext } from "react"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import Post from "../components/post"
import { Info } from "../utils/UI"

export const Context = createContext()

const PostTemplate = ({ data: { post } }) => (
  <Layout
    heading={(
      <>
        <Link to='/'><h1>{post.title}</h1></Link>
        <Info>
          {post.createdAt} • {post.content.md.timeToRead} min read.
        </Info>
      </>
    )}
    seo={{
      title: post.title,
      description: post.content.md.excerpt,
      pathname: "/" + post.slug,
      image: {
        url: post.image.file.url,
        contentType: post.image.file.contentType,
        size: post.image.file.details.image
      }
    }}
  >
    <Context.Provider value={post}>
      <Post />
    </Context.Provider>
  </Layout>
)

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

export default PostTemplate

export const pageQuery = graphql`
  query POST_PAGE_QUERY ($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      id
      title
      slug
      tags
      createdAt(formatString: "MMMM D, YYYY")
      content {
        md: childMarkdownRemark {
          timeToRead
        }
      }
      image {
        fluid(maxWidth: 960) {
          ...GatsbyContentfulFluid_withWebp
        }
        file {
          url
          contentType
          details {
            image {
              width
              height
            }
          }
        }
      }
      content {
        md: childMarkdownRemark {
          html
          excerpt
        }
      }
    }
  }
`

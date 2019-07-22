import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

import { useSiteMeta } from "./hooks"

const checkUrl = url => url.match(/^https/i) ? url : "https:" + url

const SEO = ({ title, description, image, pathname }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl
  } = useSiteMeta()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || "/"}`,
    image: {
      url: image ? checkUrl(image.url) : `${siteUrl}${defaultImage}`,
      contentType: image ? image.contentType : "image/png",
      size: image ? image.size : { width: "512", height: "512" }
    }
  }

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={seo.title}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image.url} />

      <meta property="og:locale" content='en'/>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image.url} />
      <meta property="og:image:type" content={seo.image.contentType} />
      <meta property="og:image:width" content={seo.image.size.width} />
      <meta property="og:image:height" content={seo.image.size.height} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image.url} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  pathname: PropTypes.string
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null
}

export default SEO

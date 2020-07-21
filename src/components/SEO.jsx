import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

const SEO = () => {
  const data = useStaticQuery(query)
  const {
    site: {
      siteMetadata: { title, description, url, logo },
    },
  } = data

  return (
    <Helmet>
      <title>{title}</title>
      <html lang="en" />
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" href="/cinema.png" />
      <link rel="icon" type="image/ico" href="/cinema..ico" />
      <meta name="msapplication-TileColor" content="#44ce70" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${logo}`} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:width" content="980" />
      <meta property="og:image:height" content="890" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${logo}`} />
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query Config {
    site {
      siteMetadata {
        title
        description
        url
        logo
      }
    }
  }
`

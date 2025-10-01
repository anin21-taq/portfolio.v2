import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, pathname, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  const seo = {
    title: title || data.site.siteMetadata.title,
    description: description || data.site.siteMetadata.description,
    url: `${data.site.siteMetadata.siteUrl}${pathname || ""}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {children}
    </>
  )
}

export default SEO

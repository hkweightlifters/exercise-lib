import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        title
        description
      }
    }
  }
`

const FetchData = () => {
  // console.log(useStaticQuery(getData))
  // const data = useStaticQuery(getData);

  const {
    site: {
      info: { 
        title,
        description,
      },
    }
  } = useStaticQuery(getData)

  return (
    <div>
      <p>This is { title }</p>
      <p>This is { description }</p>
    </div>
  )
}

export default FetchData

import React from 'react'
import { graphql } from "gatsby"
import ExercisesList from "../components/ExercisesList"
import Layout from '../components/Layout'
import SEO from "../components/SEO"

const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""

const TagTemplate = ({ data, pageContext }) => {
  const exercises = data.allContentfulExercise.nodes
  return (
    <Layout>
      <SEO title={ capitalize(pageContext.tag) } />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <ExercisesList exercises={ exercises } />
      </main>
    </Layout>

  )
}

export const query = graphql`
  query getExerciseByTag($tag: String) {
    allContentfulExercise(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        contributor
        contributorLink
        venue
        venueLink
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate

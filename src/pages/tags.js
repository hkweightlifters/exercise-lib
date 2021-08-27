import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'
import setupTags from "../utils/setupTags"
import SEO from "../components/SEO"

const Tags = ({ data: { allContentfulExercise: { nodes: exercises } } }) => {
  const newTags = setupTags(exercises)
  console.log(newTags)
  return (
    <Layout>
      <SEO title="Tags" />
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link to={`/tags/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value}</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulExercise(
      sort: {order: ASC, fields: title}
    ) {
      nodes {
        id
        content {
          tags
        }
      }
    }
  }
`

export default Tags

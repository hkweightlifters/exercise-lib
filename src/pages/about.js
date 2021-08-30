import React from 'react'
import Layout from '../components/Layout'
// import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from 'gatsby'
import ExercisesList from "../components/ExercisesList"
import SEO from "../components/SEO"

const About = ({ data: { allContentfulExercise: { nodes: exercises } } }) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About This Project</h2>
            <p>Veniam labore irure occaecat ex tempor eu magna ullamco. Laborum mollit ex commodo enim irure. Dolor occaecat est pariatur irure labore officia. Exercitation ex culpa ex incididunt et qui nisi ex cillum exercitation minim fugiat nostrud ipsum. Ipsum occaecat reprehenderit aliquip ipsum officia veniam deserunt ad nostrud amet labore.</p>
            <p>Minim quis sint velit amet ad sit Lorem exercitation minim amet mollit cillum. Occaecat ea aute cillum labore eiusmod cupidatat. Velit anim nisi velit eiusmod est veniam sunt id. Eiusmod officia deserunt elit nisi eiusmod aliqua incididunt. Sit laborum exercitation laborum qui ipsum.</p>
            <Link to="/contact" className="btn">
              Contact Us
            </Link>
          </article>
          <StaticImage
            src="../assets/images/squat.jpeg"
            alt="Squat"
            placeholder="tracedSVG"
            className="about-img"
          />
        </section>
        <section className="featured-recipes">
          <h5>Featured Exercises</h5>
          <ExercisesList exercises={exercises} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulExercise(
      sort: {order: ASC, fields: title}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        featured
        title
        contributor
        venue
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

export default About
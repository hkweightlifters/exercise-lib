import React from 'react'
import TagsList from "./TagsList"
import ExercisesList from "./ExercisesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
  allContentfulExercise(sort: {fields: title, order: ASC}) {
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

const AllExercises = () => {
  const data = useStaticQuery(query)
  const exercises = data.allContentfulExercise.nodes
  return (
    <section className="recipes-container">
      <TagsList exercises={exercises}/>
      <ExercisesList exercises={exercises}/>
    </section>
  )
} 

export default AllExercises
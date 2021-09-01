import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from 'slugify'

const ExercisesList = ({ exercises = [] }) => {
  return (
    <div className="recipes-list">
      {exercises.map((exercise) => {
        const { id, title, image, contributor, venue } = exercise;
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <div>
            <Link key={id} to={`/exercises/${slug}`} className="recipe">
              <GatsbyImage
                image={pathToImage}
                className="recipe-img"
                alt={title} />
              <h5>{title}</h5>
              <p>By: {contributor} | At: {venue}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ExercisesList

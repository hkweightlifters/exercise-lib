import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsGeo, BsPeople } from "react-icons/bs"
import slugify from 'slugify'

const ExercisesList = ({ exercises = [] }) => {
  return (
    <div className="recipes-list">
      {exercises.map((exercise) => {
        const { id, title, chineseName, image, contributor, venue } = exercise;
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
              <h5>{chineseName}</h5>
              <p><BsPeople /> {contributor} | <BsGeo /> {venue}</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ExercisesList

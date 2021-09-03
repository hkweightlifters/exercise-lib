import { Link } from 'gatsby'
import React from 'react'
import setupTags from "../utils/setupTags"

const TagsList = ( {exercises} ) => {
  const newTags = setupTags(exercises)
  return (
    <div className="tag-container">
      <h4>標簽| Tags</h4>
      <div className="tags-list">
        {newTags.map((tag, index)  => {
          const [text, value] = tag
          return(
            <Link to={`/tags/${text}`} key={index}>
              {text} ({value})
            </Link>) 
        })}
      </div>
    </div>
  )
}

export default TagsList

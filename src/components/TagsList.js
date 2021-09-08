import { Link } from 'gatsby'
import React from 'react'
import setupTags from "../utils/setupTags"
import { BsTagFill } from "react-icons/bs"
import styled from 'styled-components'

const TagsList = ( {exercises} ) => {
  const newTags = setupTags(exercises)
  return (
    <div className="tags-container">
      <Wrapper><BsTagFill /><h4>Tags</h4></Wrapper>
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

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* text-align: left; */
  align-items: center;
  gap: 0.5rem;

  @media screen and (min-width: 992px) {
    justify-content: left;
  }
`

export default TagsList

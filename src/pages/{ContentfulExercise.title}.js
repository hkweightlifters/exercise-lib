import React from 'react'
import { Link, graphql } from 'gatsby'
import { BsChatDots, BsGeo, BsPeople } from "react-icons/bs"
import Layout from "../components/Layout"
import slugify from "slugify"
import SEO from "../components/SEO"
import Video from '../components/Videos'

const ExerciseTemplate = ({ data }) => {
  const {
    title,
    videoTitle,
    videoLink,
    chineseName,
    contributor,
    contributorLink,
    venue,
    venueLink,
    content,
    description: { description }
  } = data.contentfulExercise
  const { keys, tags, instructions, tools } = content

  return (
    <Layout>
      <SEO title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <Video
              videoSrcURL={videoLink}
              videoTitle={videoTitle}
              className="video"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons below */}
              <div className="recipe-icons">
                <article>
                  <BsChatDots />
                  <h5>中文名</h5>
                  <p>{chineseName}</p>     
                </article>
                <article>
                  <BsPeople />
                  <h5>Contributor</h5>
                  <a href={contributorLink} target="_blank" rel="noopener noreferrer">
                    {contributor}
                  </a>                
                </article>
                <article>
                  <BsGeo />
                  <h5>Venue</h5>
                  <a href={venueLink} target="_blank" rel="noopener noreferrer">
                    {venue}
                  </a>                
                </article>
              </div>
              <p className="recipe-tags">
                Tags : {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true })
                  return (
                    <Link key={index} to={`/tags/${slug}`}>
                      {tag}
                    </Link>
                  )
                })}
              </p>
            </article>
          </section>
          <section className="recipe-content">
            <article>
              <h4>Instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index} className="single-instruction">
                    <header>
                      <p>Step {index + 1}</p>
                      <div></div>
                    </header>
                    <p>{item}</p>
                  </div>
                )
              })}
            </article>
            <article className="second-column">
              <div>
                <h4>key</h4>
                {keys.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  )
                })}
              </div>
              <div className="tools-list">
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <p className="single-tool">
                      <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                    </p>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleExercise($title: String) {
    contentfulExercise(title: {eq: $title}) {
      title
      videoTitle
      videoLink
      chineseName
      contributor
      contributorLink
      venue
      venueLink
      content {
        keys
        tags
        instructions
        tools {
          name
          link
        }          
      }
      description {
        description
      }
    }
  }
`
export default ExerciseTemplate

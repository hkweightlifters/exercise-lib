import React from 'react'
import { Link, graphql } from 'gatsby'
import { BsChatDots, BsGeo, BsPeople } from "react-icons/bs"
import Layout from "../../components/Layout"
import slugify from "slugify"
import SEO from "../../components/SEO"
import Video from '../../components/Videos'
import GoogleMap from '../../components/GoogleMap'

const VenueTemplate = ({ data }) => {

  const {
    venue,
    venueLink,
    longLat,
    description: { description }
  } = data.contentfulVenue

  const { lat, lon } = longLat

  return (
    <Layout>
      <SEO title={venue} description={description} />
      <main className="page">
      <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GoogleMap location={ {venue, lon, lat} }/>
            <article className="recipe-info">
              <h2>{venue}</h2>
              <p>{description}</p>
              {/* icons below */}
              <div className="recipe-icons">
                <article>
                  <BsGeo />
                  <h5>Venue</h5>
                  <a href={venueLink} target="_blank" rel="noopener noreferrer">
                    {venue}
                  </a>                
                </article>
                <article>
                  <BsGeo />
                  <h5>Venue</h5>
                  <a href={venueLink} target="_blank" rel="noopener noreferrer">
                    {venue}
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
            </article>
           </section> 
          </div>  
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getSingleVenue($venue: String) {
    contentfulVenue(venue: {eq: $venue}) {
      id
      venue
      venueLink
      longLat {
        lat
        lon
      }
      description {
        description
      }
    }
  }
`
export default VenueTemplate

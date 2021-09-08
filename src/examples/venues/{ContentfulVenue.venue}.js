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
    description: { description },
    content
  } = data.contentfulVenue

  const { lat, lon } = longLat
  const { tags, cnAddress, enAddress } = content

  return (
    <Layout>
      <SEO title={venue} description={description} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GoogleMap location={{ venue, lon, lat }} />
            <article className="recipe-info">
              <h2>{venue}</h2>
              <p>{description}</p>
              <h4>地址 | Address</h4>
              {cnAddress.map((line, index) => {
                return (
                  <div className="addressContainer">
                    <span key={index}>
                      {line}
                    </span>
                  </div>)
              })}
              {enAddress.map((line, index) => {
                return (
                  <div className="addressContainer">
                    <span key={index}>
                      {line}
                    </span>
                  </div>)
              })}
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
      content {
        tags
        cnAddress
        enAddress
      }
    }
  }
`
export default VenueTemplate
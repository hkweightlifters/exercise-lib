import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from 'gatsby-plugin-image'
import AllExercises from "../components/AllExercises"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/barbell.jpeg"
            alt="Barbell"
            layout="constrained"
            placeholder="tracedSVG"
            className="hero-img"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Exercise Library</h1>
              <p>Contributed by Weightlifters in Hong Kong</p>
            </div>
          </div>
        </header>
        <AllExercises />
      </main>
    </Layout>
  )
}

import React from 'react'
import Layout from "../components/Layout"
import Video from '../components/Videos'

const Testing = () => {
  return (
    <Layout>
      <main className="page">
        <section className="recipe-hero">
          <Video
            videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
            videoTitle="Official Music Video on YouTube"
          />
        </section>
      </main>
    </Layout>
  )
}

export default Testing
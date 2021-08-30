import React from 'react'
import Layout from '../components/Layout'
import SEO from "../components/SEO"
import AllExercises from "../components/AllExercises"

const Recipes = () => {
  return (
    <Layout>
      <SEO title="Exercises" />
      <main className="page">
        <AllExercises />
      </main>
    </Layout>
  )
}

export default Recipes

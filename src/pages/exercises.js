import React from 'react'
import Layout from '../components/Layout'
import AllExercises from '../components/AllExercises'
import SEO from "../components/SEO"

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

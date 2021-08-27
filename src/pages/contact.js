import React from 'react'
import Layout from '../components/Layout'
// import { Link, graphql, useStaticQuery } from 'gatsby'
import Seo from '../components/SEO'

// const Contact = ( {data:{allContentfulRecipe:{nodes:recipes}}} ) => {
const Contact = ()   => {  
  return (
    <Layout>
      <Seo title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Get in Touch!</h3>  
            <p>
              Qui et non dolor cillum ex Lorem culpa cillum ullamco ullamco sit. Dolor irure quis consequat ea. Magna reprehenderit eu nulla esse sit id. Irure laboris irure dolore aliqua dolor. Consequat sit eu aliquip elit qui elit aliquip dolore quis irure.
            </p>
            <p>
              Qui et non dolor cillum ex Lorem culpa cillum ullamco ullamco sit. Dolor irure quis consequat ea. Magna reprehenderit eu nulla esse sit id. Irure laboris irure dolore aliqua dolor. Consequat sit eu aliquip elit qui elit aliquip dolore quis irure.
            </p>
            <p>
              Qui et non dolor cillum ex Lorem culpa cillum ullamco ullamco sit. Dolor irure quis consequat ea. Magna reprehenderit eu nulla esse sit id. Irure laboris irure dolore aliqua dolor. Consequat sit eu aliquip elit qui elit aliquip dolore quis irure.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="na"/>
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="na"/>
              </div>
              <div className="form-row">
                <label htmlFor="message">your email</label>
                <textarea type="message" id="textarea"/>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        {/* <section className="featured-recipes">
          <h5>Look at this!</h5>
          <RecipesList recipes={recipes}/>
        </section> */}
      </main>
    </Layout>
  )
}

// export const query = graphql`
//   {
//     allContentfulRecipe(
//       sort: {order: ASC, fields: title}
//       filter: {featured: {eq: true}}
//     ) {
//       nodes {
//         id
//         featured
//         title
//         cookTime
//         prepTime
//         content {
//           tags
//         }
//         image {
//           gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
//         }
//       }
//     }
//   }
// `

export default Contact
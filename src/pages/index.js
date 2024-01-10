// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'



// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Emily Liu">
      <div style={{ paddingLeft: "10px" }}>
        <p style={{ fontSize: "20px", margin:"0px" }}><strong>About me:</strong></p>
        <p style={{ fontSize: "20px" }}>
          I am a student at the University of Virginia pursuing a Bachelor's degree in Computer Science and Studio Art. My expected graduation date is May 2025.
          I have a passion for finding solutions to complex problems and thinking critically and creatively.
          I'm interested in full stack development, web design, and artificial intelligence.
        </p>
      </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage

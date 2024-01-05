// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'




// Step 2: Define your component
const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <p style={{fontSize:"20px"}}><strong>Email: </strong><a href="mailto:vyj9jn@virginia.edu" target="_blank">vyj9jn@virginia.edu</a></p>
      <p style={{fontSize:"20px"}}><strong>Linkedin: </strong><a href="https://www.linkedin.com/in/emily-liu-121b00226/" target="_blank" rel="noopener noreferrer">emily-liu-121b00226</a></p>
      <p style={{fontSize:"20px"}}><strong>Github: </strong><a href="https://github.com/emilybliu" target="_blank" rel="noopener noreferrer">emilybliu</a></p>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

// Step 3: Export your component
export default ContactPage
// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'




// Step 2: Define your component
const ArtPage = () => {
  return (
    <Layout pageTitle="Art">
      <p>art.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Art" />

// Step 3: Export your component
export default ArtPage
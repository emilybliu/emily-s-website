// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'




// Step 2: Define your component
const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <p>Projects</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

// Step 3: Export your component
export default ProjectsPage
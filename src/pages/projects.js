// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'
import Seo from '../components/seo'
import data from '../data'




// Step 2: Define your component
const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      {data.projects.map((project, index) => (
        <Card
          key={index}
          heading={project.title}
          paragraph={project.para}
          imgUrl={project.imageSrc}
          alt={project.alt}
          date={project.date}
          projectLink={project.url}
          pageTitle="Projects"
        ></Card>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

// Step 3: Export your component
export default ProjectsPage
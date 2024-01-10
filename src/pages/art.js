// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Card from '../components/card'
import data from '../data'




// Step 2: Define your component
const ArtPage = () => {
  return (
    <Layout pageTitle="Art">
      {data.art.map((art, index) => (
        <Card
          key={index}
          heading={art.title}
          paragraph={art.para}
          imgUrl={art.imageSrc}
          date={art.date}
          projectLink={art.url}
          pageTitle="Art"
        ></Card>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="Art" />

// Step 3: Export your component
export default ArtPage
import * as React from 'react'
import { navigate, Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
} from './layout.module.css'
import resume from '../static/Resume.pdf'
import transcript from '../static/transcript.pdf'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <button onClick={() => {navigate("/")}} className={navLinkItem}>
            Home
          </button>
          <Link href={resume}target="_blank">
            <button className={navLinkItem}>Resume</button>
          </Link>
          <Link href={transcript}target="_blank">
            <button className={navLinkItem}>Transcript</button>
          </Link>
          <button onClick={() => {navigate("/projects")}} className={navLinkItem}>
            Projects
          </button>
          <button onClick={() => {navigate("/art")}} className={navLinkItem}>
            Art
          </button>
          <button onClick={() => {navigate("/contact")}} className={navLinkItem}>
            Contact
          </button>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
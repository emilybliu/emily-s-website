import React from "react"
import {
    card,
    text,
  } from './card.module.css'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'


const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <main>
      <div className={card}>
        <img src={imgUrl} alt="kjfalk"/>
        <p style={{fontSize:"17px"}}><strong>{heading}</strong></p>
        <p className={text}>{paragraph}</p>
        <a
        href={projectLink ? projectLink : "#"}
        target="_blank"
        rel="noopener noreferrer"
        >
        Learn more!
        </a>
      </div>
    </main>

  )
}

export default Card
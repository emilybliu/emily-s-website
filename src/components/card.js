import React from "react"
import {
    card,
    text,
    details,
  } from './card.module.css'


const Card = ({ heading, paragraph, imgUrl, alt, date, projectLink, pageTitle }) => {
  return (
    <main>
      <div className={card}>
          <div className={details}>
            <p style={{ fontSize: "17px", marginTop:"0px", marginBottom:"10px" }}><strong>{heading}</strong></p>
            <p style={{ fontSize: "10px", marginTop:"0px" }}className={text}><em>{date}</em></p>
            <p className={text}>{paragraph}</p>
            <a
              href={projectLink ? projectLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pageTitle === 'Art' ? (
                <em>Watch!</em>
              ) : (
                <em>Learn more!</em>
              )}
            </a>
          </div>
          <div className={details}>
            <img src={imgUrl} alt={alt}/>
          </div>
      </div>
    </main>
  )
}

export default Card;
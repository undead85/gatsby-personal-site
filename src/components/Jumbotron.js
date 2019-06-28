import React from 'react'
import style from './jumbotron.module.scss'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const Jumbotron = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "images/background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  `)
  return (

    <BackgroundImage 
      Tag="section"
      className={style.container}
      fluid={data.file.childImageSharp.fluid}
      backgroundColor={`#040e18`} >
        <div className={style.content}>
          <div>
            <p>Hi</p>
            <p>I'm</p>
            <h1>ANGEL</h1>
            <h2>MEZA</h2>
            <p>- a Full-Stack Developer</p>
          </div>
        </div>
      </BackgroundImage>

  )
}

export default Jumbotron

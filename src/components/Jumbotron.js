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
          <h4>Hi</h4>
          <h4>I'm</h4>
          <h1>ANGEL</h1>
          <h2>MEZA</h2>
          <h4>------ a Full-stack Developer</h4>
          </div>
        </div>
      </BackgroundImage>

  )
}

export default Jumbotron

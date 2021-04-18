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
    <section>
    <BackgroundImage 
      Tag="div"
      className={style.container}
      fluid={data.file.childImageSharp.fluid}
      backgroundColor={`#040e18`} >
        <div className={style.content}>
          <div>
            {/* <p>Hi</p>
            <p>I'm</p> */}
            <h1>ANGEL</h1>
            <h2>MEZA</h2>
            <p>- a Software Engineer</p>
          </div>
          <div>
            <p>Some dreams come true in this amazing world. Believe it or not, 
          we are what we want.<br/>
              <a href="https://www.linkedin.com/in/angelillo85" 
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a></p>
              
          </div>
        </div>
      </BackgroundImage>
      <div className={style.areaDescription}>
        <p>Some dreams come true in this amazing world. Believe it or not, 
          we are what we want.<br/>
              <a href="https://www.linkedin.com/in/angelillo85" 
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
        </p>        
      </div>
      </section>
  )
}

export default Jumbotron

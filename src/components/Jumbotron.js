import React from 'react'
import style from './jumbotron.module.scss'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Jumbotron = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "images/big-avatar-1x.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    <section className={style.container}>
      <div className={style.imageContainer}>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="big avatar"/>
      </div>
      <div className={style.content}>
        <h4>Hi</h4>
        <h4>I'm</h4>
        <h1>ANGEL</h1>
        <h1>MEZA</h1>
        <h4>a Full-stack Developer</h4>
      </div>
    </section>
  )
}

export default Jumbotron

import React from "react"
import Layout from "../components/Layout"
import Jumbotron from "../components/Jumbotron"
import {Helmet} from "react-helmet"

const MyPage = () => {
  return (
      <Layout>
        <Helmet>
          <title>Angelillo site</title>
          <link 
            href="https://fonts.googleapis.com/css?family=Fira+Sans|Shadows+Into+Light&display=swap"
            rel="stylesheet" />
        </Helmet>
        <Jumbotron />
      </Layout>    
  )
} 

export default MyPage

import React from "react"
import Layout from "../components/Layout"
import Jumbotron from "../components/Jumbotron"
import {Helmet} from "react-helmet"

const MyPage = () => {
  return (
      <Layout>
        <Helmet>
          <html lang="en" />
          <title>Angelillo site</title>
          <meta name="description" content="Hi, I am Angel Meza a full-stack developer" />
          <link 
            href="https://fonts.googleapis.com/css?family=Fira+Sans|Shadows+Into+Light&display=swap"
            rel="stylesheet"
            media="none" 
            onload="if(media!='all')media='all'" />
        </Helmet>
        <Jumbotron />
      </Layout>    
  )
} 

export default MyPage

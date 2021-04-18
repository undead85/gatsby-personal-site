import React from "react"
import Layout from "../components/Layout"
import Error from "../components/Error"
import {Helmet} from "react-helmet"

const MyErrorPage = () => {
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
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Helmet>
        <Error/>
      </Layout>    
  )
} 

export default MyErrorPage

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`
  ],
}

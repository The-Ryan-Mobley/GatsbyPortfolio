module.exports = {
  siteMetadata: {
    title: `Ryan Mobley`,
    description: `My portfolio as a Software Engineer`,
    author: `Ryan Mobley`,
  },
  proxy: {
    prefix: "/api",
    url: "http://localhost:1337",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan Mobley`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1848b3`,
        theme_color: `#1848b3`,
        display: `minimal-ui`,
        icon: `src/images/favi.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],

}

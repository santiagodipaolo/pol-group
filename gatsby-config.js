/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require(`path`);
const siteUrl = "https://pol.finance/";

module.exports = {
  siteMetadata: {
    title: `POL Finance Group`,
    description: `POL Finance Group is a holding company operating businesses across quantitative research, market making, decentralized finance, and real-world assets.`,
    author: `POL Finance Group`,
    twitterUsername: `@polfinance_`,
    image: `${siteUrl}pol-metadata.png`,
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
};

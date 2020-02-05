const path = require('path');
module.exports = {
    siteMetadata: {
        title: `Drew Johnson's Portfolio`,
        description: `Drew Johnson - Web Developer - Portfolio`,
        author: `@drewjohnson`,
        siteUrl: 'https://drewj.dev'
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `assets`)
            }
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // PWA support
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Drew Johnson's Portfolio`,
                short_name: `DrewJ`,
                start_url: `/`,
                background_color: `#FF9651`,
                theme_color: `#F7F8FA`,
                display: `minimal-ui`,
                icon: `src/assets/favicon.png`
            }
        },
        `gatsby-plugin-offline`,
        /* Absolute Imports */
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                src: path.join(__dirname, 'src'),
                components: path.join(__dirname, 'src/components'),
                helpers: path.join(__dirname, 'src/utils/helpers.js')
            }
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-136395143-1',
                // Puts tracking script in the head instead of the body
                head: true
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {}
        }
    ]
};

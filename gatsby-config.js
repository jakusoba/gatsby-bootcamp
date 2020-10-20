require("dotenv").config({
    path:`.env.${process.env.NODE_ENV}`,
})



module.exports = {
    siteMetadata: {
        title: 'Jane Akusoba',
        author: 'Jane Akusoba'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                host:process.env.CONTENTFUL_HOST


            }
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false

                        }
                    }
                ]
            }
        }    
    ]
}
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: process.env.TITLE || 'VideoHead',
    description: process.env.DESC || 'Worthy movies DDBB - 50 greatest movies of history',
    favicon: '/cinema.ico',
    url: process.env.URL || 'https://videohead.netlify.app',
    logo: '/cinema.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`./src/components/Layout.jsx`),
      },
    },
    {
      resolve: 'gatsby-source-tmdb',
      options: {
        apiKey: process.env.GATSBY_API_KEY,
        sessionID: process.env.SESSION_ID,
        region: 'ES',
        modules: {
          account: {
            activate: true,
            endpoints: {
              tvs: ['accountFavoriteTv', 'accountTvWatchlist'],
              movies: ['accountFavoriteMovies', 'accountMovieWatchlist'],
              list: 'accountLists',
            },
          },
        },
        timezone: 'Europe/Madrid',
        reqPerTenSeconds: 32,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: process.env.TITLE || 'VideoHead - Worthy movies DDBB',
        short_name: 'VideoHead',
        start_url: '/',
        background_color: '#272B35',
        theme_color: '#00d374',
        display: 'standalone',
        icons: [
          {
            src: '/cinema.png',
            sizes: '980x890',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
  ],
}

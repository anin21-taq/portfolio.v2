module.exports = {
  siteMetadata: {
    title: "Portfolio - Anindra Taqi Wardhana",
    description: "Portfolio website showcasing my projects and skills in IT, TKJ, and networking",
    author: "Anindra Taqi Wardhana",
    siteUrl: "https://anindra-portfolio.netlify.app",
    keywords: ["Portfolio", "TKJ", "Networking", "React", "Gatsby", "Anindra Taqi Wardhana"],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Portfolio - Anindra Taqi Wardhana",
        short_name: "Portfolio",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#6366f1",
        display: "minimal-ui",
        icon: "src/images/logo1.png",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: { displayName: true },
    },
    `gatsby-plugin-react-helmet`, // penting buat SEO
  ],
}

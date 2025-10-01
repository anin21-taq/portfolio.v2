module.exports = {
  siteMetadata: {
    title: "Portfolio - [Nama Anda]",
    description: "Portfolio website showcasing my projects and skills",
    author: "[Nama Anda]",
    siteUrl: "https://portfolio-anda.netlify.app",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // Folder untuk gambar
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`, // Pastikan folder ini ada
      },
    },

    // Folder untuk data JSON
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },

    // Agar Gatsby bisa membaca file JSON
    `gatsby-transformer-json`,

    // Manifest untuk icon dan PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Portfolio - [Nama Anda]",
        short_name: "Portfolio",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#6366f1", // Tadi ada tanda backtick yang salah
        display: "minimal-ui",
        icon: "src/images/logo1.png", // Harus ada dan berbentuk kotak
      },
    },

    // Styled Components
    `gatsby-plugin-styled-components`,
  ],
};

module.exports = {
  siteMetadata: {
    title: "Open Source Community Africa",
    description: "Lorem",
    siteUrl: "https://oscafrica.org",
    image: "https://raw.githubusercontent.com/oscafrica/osf-website/master/src/images/osf-sustain.jpg",
    twitter: "@oscafrica",
    fbAppID: "201250060624015"
  },
  plugins: [
    "gatsby-plugin-gtag",
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: "UA-00000000-0",
        head: false,
        anonymize: true
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Open Source Community Africa",
        short_name: "OSCA",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#081e32",
        display: "minimal-ui",
        icon: "src/images/osca-logo.png"
      }
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"]
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        exclude: ["/tailwind-config-demo"]
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/test/"]
      }
    }
  ]
};

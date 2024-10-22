import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://devlak2001.github.io/portfolio/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://devlak2001.github.io/portfolio/",
        sitemap: "https://devlak2001.github.io/portfolio/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};

export default config;

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "graphcms-aula",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckud5ewdh6ml701yz63i9192v/master",
      },
    }
  ],
};

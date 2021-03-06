// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "G Proto App",
  plugins: [
    {
      use: "@gridsome/source-airtable",
      options: {
        apiKey: "keyPlFLN1JpGiQb7h", // required
        baseId: "app7kH1C7c6dP2tRv", // required
        tableName: "proto_listing_table", // required
        typeName: "Listings" // required
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "posts/**/*.md",
        typeName: "Posts",
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        htmlTitle: `G CMS`,
        publicPath: `/admin`
      }
    },
    { use: "gridsome-plugin-netlify-cms-paths" }
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ]
    }
  }
};

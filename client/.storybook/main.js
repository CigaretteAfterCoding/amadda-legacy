const path = require("path");
const { merge } = require("webpack-merge");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
  ],
  webpackFinal: async (config) => {
    return merge(config, {
      resolve: {
        alias: {
          Apis: path.resolve(__dirname, '../src/apis'),
          Components: path.resolve(__dirname, '../src/components'),
          Elements: path.resolve(__dirname, '../src/elements'),
          Images: path.resolve(__dirname, '../src/images'),
          Layouts: path.resolve(__dirname, '../src/layouts'),
          Pages: path.resolve(__dirname, '../src/pages'),
          Recoil: path.resolve(__dirname, '../src/recoil'),
          Styles: path.resolve(__dirname, '../src/styles'),
          Types: path.resolve(__dirname, '../src/types'),
        },
      },
    });
  },
}
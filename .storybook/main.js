
module.exports = {
  stories: ["../src/components/**/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    '@whitespace/storybook-addon-html',
    '@storybook/addon-viewport',
    'storybook-css-modules-preset',
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  core: {
    builder: "webpack5",
  },
};

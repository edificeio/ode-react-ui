module.exports = {
  stories: [
    "../../packages/core/src/**/*.stories.mdx",
    "../../packages/core/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../packages/advanced/src/**/*.stories.mdx",
    "../../packages/advanced/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-cssresources",
  ],
  typescript: {
    reactDocgen: "react-docgen",
  },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
};

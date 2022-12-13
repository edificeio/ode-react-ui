module.exports = {
  stories: [
    "../../packages/advanced/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../packages/core/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../../packages/hooks/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.mdx",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
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

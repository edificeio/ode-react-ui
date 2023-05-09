module.exports = {
  stories: [
    "../packages/advanced/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/core/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/hooks/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.stories.mdx",
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
  babel: async (options) => ({
    ...options,
    presets: [
      ...options.presets,
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
        "preset-react-jsx-transform", // Can name this anything, just an arbitrary alias to avoid duplicate presets'
      ],
    ],
  }),
};

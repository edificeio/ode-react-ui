module.exports = {
  stories: ["../packages/core/src/**/*.stories.@(js|jsx|ts|tsx)", "../packages/components/src/**/*.stories.@(js|jsx|ts|tsx)", "../packages/hooks/src/**/*.stories.@(js|jsx|ts|tsx)", "../docs/**/*.mdx"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y", "@storybook/addon-mdx-gfm"],
  typescript: {
    reactDocgen: "react-docgen"
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  features: {
    storyStoreV7: true
  },
  babel: async options => ({
    ...options,
    presets: [...options.presets, ["@babel/preset-react", {
      runtime: "automatic"
    }, "preset-react-jsx-transform" // Can name this anything, just an arbitrary alias to avoid duplicate presets'
    ]]
  }),

  docs: {
    autodocs: true
  }
};
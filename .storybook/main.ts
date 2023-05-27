import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: [
    "../packages/core/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/components/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/hooks/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.mdx",
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  typescript: {
    reactDocgen: "react-docgen",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;

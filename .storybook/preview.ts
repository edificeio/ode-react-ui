import type { Preview } from "@storybook/react";
import { customViewports } from "./viewports";

import "../public/assets/main.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Design Tokens",
          "Components",
          "Layouts",
          "Icons",
        ],
      },
    },
    viewport: { viewports: customViewports },
  },
};

export default preview;

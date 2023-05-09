import "../public/assets/main.css";

const customViewports = {
  mobile: {
    name: "Mobile",
    styles: {
      width: "320px",
      height: "963px",
    },
  },
  mobileLarge: {
    name: "Mobile Large",
    styles: {
      width: "376px",
      height: "801px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "768px",
      height: "801px",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1024px",
      height: "768px",
    },
  },
  desktopLarge: {
    name: "Desktop Large",
    styles: {
      width: "1280px",
      height: "768px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: "docs",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    // storySort: sortStories(SORT_ORDER),
    storySort: {
      // method: "alphabetical",
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
};
